const app = Vue.createApp({
    data() {
        return {
            tasks: []
        }
    },
});

app.component('task-form', TaskForm);
app.component('task-list', TaskList);

app.mount("#tasks-app");