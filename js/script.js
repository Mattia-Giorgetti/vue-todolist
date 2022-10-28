const {createApp} = Vue;
createApp({
    data(){
        return {
            new_task: '',
            hasError: false,
            myList: [
                {
                    text: 'Fare bucato',
                    done: false
                },
                {
                    text: 'Comprare pasta',
                    done: false
                },
                {
                    text: 'Chiamare Laura',
                    done: false
                }
            ],
            newItem: {},
            liItemClass: 'd-flex justify-content-between align-items-center border-bottom p-1',

        }
    },
    methods: {
        addTask() {
            if(this.new_task.length > 0){
                this.myList.unshift({text:this.new_task, done:false })
                this.hasError = false
                this.new_task = ''
            } else {
                this.hasError = true;
            }
        },
        removeTask(index) {
            this.myList.splice(index, 1);
        },
        completeTask(index){
            this.myList[index].done = true
        }
        
    },
}).mount('#app');

