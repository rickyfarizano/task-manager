const TaskForm = {
    data:function() {
        return {
            newTask: {
                title: "",
                description: ""
            },
        }
    },
    template: `
    <form>
        <fieldset>
            <label for="title">Titulo</label>
            <input v-model="newTask.title" type="text" id="title" placeholder="Ingrese un titulo">
        </fieldset>

        <fieldset>
            <label for="description">Descripcion</label>
            <input v-model="newTask.description" type="text" id="description" placeholder="Ingrese la descripcion de la tarea">
        </fieldset>

        <input type="submit" value="Enviar">
    </form>`,
    created() {
        console.log("%cEl componente formulairo fue creado", 'background: green; color: white;');
    },
    method: {
        AddTask:function() {
            this.$emit('task-added', this.newTask);
        }
    }
}