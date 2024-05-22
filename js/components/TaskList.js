const TaskList = {
    props: ['tasks'],
    template: `
    <ul>
        <li v-for="task in tasks">
            <h2>{{task.title}}</h2>
            <p>
                {{task.description}}
            </p>
            <button @click="DeleteTask(task)">Eliminar tarea</button>
        </li>
    </ul>`,
    methods: {
        DeleteTask:function(task) {
            this.$emit('delete-task', task);
        }
    }
}