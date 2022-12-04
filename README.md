# Redux Toolkit  



# Code  

## src/redux/features/api/apiSlice.ts  
### apiSlice.js  

```typescript  

import { createApi, fakeBaseQuery, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { resolveConfig } from '@svgr/core';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3501',
    }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => '/todos',
            transformResponse: (res: Todo[]) => res.sort((a, b) => b.id - a.id),
            providesTags: ["Todos"]
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ["Todos"]
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: 'PATCH',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: ({id}) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['Todos']
        })
    })
});

export const {useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice;  


```  


## App.tsx  

- Use ApiProvider:  

```typescript  
const App = () => {
  return (
    <ApiProvider api={apiSlice}>
        <MainScreen />
    </ApiProvider>
  );
}

export default App;
```  

## src/main_screen.tsx  

```typescript  
const MainScreen = () => {
    return (
        <View style={[styles.center, { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20 }]} >
            <TodoList />
        </View>
    );
}

export default MainScreen;

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },

});
```  

## src/redux/features/todo/todo_list.tsx  

```typescript  

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    let [check, setCheck] = useState(false);

    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();

    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    const deleteAlert = (id: number) => {
        
        Alert.alert(
            "Oops !!!",
            " คุณแน่ใจแล้วเหรอค่ะ \n ที่จะลบ  กิจกรรมนี้ 🥺🥺🥺",
            [
                {text: "แน่ใจ 🔥", onPress: () => deleteTodo({id: id}), style: "destructive"},
                {text: 'ไม่ดีกว่า 🧐🧐🧐', onPress: () => {}}
            ] 
        )
    }

    let content;

    if (isLoading) {
        content =  <Text style={{ fontSize: 45, color: "red", textAlign: 'center' }}>. . . Loading . . .</Text>
    } else if (isSuccess) {
        
        content = todos.map((todo) => 

        <Tod 
            key={todo.id} 
            title={todo.title} 
            checked={todo.completed} 
            onPressedTrash={() => deleteAlert(todo.id)} 
            onPressedCheck={() => updateTodo( { ...todo, completed: !todo.completed})} />)

    } else if (error) {
        content = <Text style={{ fontSize: 45, color: 'red' }}>Oops!!! Have Error</Text>
    }

    return (

        <SafeAreaView style={{flex: 1, width: '100%'}}>
            <View style={[styles.container]} >
            <Todo />
             <View 
                style={{padding: 12, backgroundColor: colors.primaryBlue, marginTop: 20, borderTopLeftRadius: 12, borderTopRightRadius: 12, borderWidth: 5, borderColor: colors.thirdBlue}}
             >
                 <Text style= {{fontSize: 18, color: colors.border}}>กิจกรรม ทั้งหมด</Text>

             </View>

            <ScrollView style={{borderWidth: 4, borderColor: colors.thirdBlue}}>
                <View style={{flex: 1,  padding: 10, backgroundColor: colors.background}}>

                    {content}
                    
                </View>
            </ScrollView>

        </View>
        </SafeAreaView>

    );
}

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryBackground,
        height: 200,
        width: '100%',
        padding: 20
    }
});

```  

## Alert 

```typescript  
const deleteAlert = (id: number) => {
        
    Alert.alert(
        "Oops !!!",
        " คุณแน่ใจแล้วเหรอค่ะ \n ที่จะลบ  กิจกรรมนี้ 🥺🥺🥺",
        [
            {text: "แน่ใจ 🔥", onPress: () => deleteTodo({id: id}), style: "destructive"},
            {text: 'ไม่ดีกว่า 🧐🧐🧐', onPress: () => {}}
        ] 
    )
}

```  

## src/redux/features/todo/todo.tsx 

```typescript 


const Todo = () => {

  let [newTodo, setNewTodo] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = () => {
    addTodo({userId: 1, title: newTodo, completed: false});
    setNewTodo('');
}
  return (  
     <View style={{}} > 
       <View style={{}}>
         <Text style= {{fontSize: 20, fontWeight: '500', color: colors.secondary}}>

            เพิ่ม กิจกรรมประจำวัน
        </Text>
       </View>
        <View style={{}}>
            <TextInput 
                placeholder="Add Todo..." 
                defaultValue={newTodo} 
                style={ [styles.textInput, {fontSize: 18, fontWeight: '500'}]}  
                onChangeText={(value) =>  setNewTodo(value)} />
        </View>
         
         <View style={{height: 70, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
             <TouchableHighlight 
                underlayColor={'transparent'} 
                onPress={() => handleSubmit()} >
                  
                <SendReuestIcon width={30}  height={30} stroke={colors.primaryBlue} style={{}} />
                  
             </TouchableHighlight>
         </View>
    </View>
  );
}

export default Todo;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.background,
    marginVertical: 12,
    padding: 12
  }
});


```  

## src/redux/features/todo/tod.tsx  

```typescript 

interface TodState {
  title: string;
  checked: boolean;
  onPressedCheck(): void;
  onPressedTrash: () => void;
}

const Tod: React.FC<TodState> = ({ title, checked, onPressedTrash, onPressedCheck }) => {
  return (
    <View 
    style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primaryBackground, padding: 24, marginVertical: 10 }}
    >

      <TouchableHighlight 
        underlayColor={colors.secondaryBlue} 
        onPress={() => onPressedCheck()} 
        style={{ backgroundColor: colors.thirdBlue, width: 30, height: 30, padding: 4, borderRadius: 4 }}
        >
        {checked ? <CheckIcon /> : <></>}

      </TouchableHighlight>

      <View style={{ flex: 7 }}>
        <Text 
            style={{ color: colors.primaryBlue, fontSize: 18, fontWeight: '500', marginLeft: 20 }}>

            { title }

        </Text>
      </View>

        <TouchableHighlight 
            style={{ flex: 1 }} 
            underlayColor={'transparent'} 
            onPress={() => onPressedTrash()}>

        <TrashIcon stroke={colors.secondaryBlue} width={25} height={25} />

        </TouchableHighlight>
     
    </View>
  );
}

export default Tod;


```  










