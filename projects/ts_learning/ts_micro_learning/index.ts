import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Data {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(res => {
    console.log(res.data);

    var data: Data = {
        userId: res.data.userId,
        id: res.data.id,
        title: res.data.title,
        completed: res.data.completed
    }

    console.log(data.userId);
    console.log(data.id);
    console.log(data.title);
    console.log(data.completed);
})

