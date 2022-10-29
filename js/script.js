const {createApp} = Vue;
createApp({
    data(){
        return {
            new_task: '',
            hasError: false,
            myList: [
                {
                    text: 'Fare bucato',
                    done: false,
                    flag: false
                },
                {
                    text: 'Comprare pasta',
                    done: false,
                    flag: false
                },
                {
                    text: 'Chiamare Laura',
                    done: false,
                    flag: false
                }
            ],
        
            inputReveal: false, 
            liItemClass: 'd-flex justify-content-between align-items-center border-bottom p-1',
        }
    },
    methods: {
        addTask() {
            if(this.new_task.length > 0){
                this.myList.unshift({text:this.new_task, done:false});
                this.hasError = false;
                this.new_task = '';
                this.inputReveal = false;
            } else {
                this.hasError = true;
            }
        },
        removeTask(index) {
            this.myList.splice(index, 1);
        },
        selfRemove() {
            let complete = setInterval(() => {
                this.removeTask();
                clearInterval(complete);
            }, 700);
        },
        completeTask(index) {
            this.myList[index].done = true;
            this.selfRemove();
        },
        toggleInput() {
            this.inputReveal = this.inputReveal  == false ? this.inputReveal  = true : this.inputReveal  = false;
        },
        flaggedTask(index) {
            this.myList[index].flag = this.myList[index].flag == false ? this.myList[index].flag = true : this.myList[index].flag = false;
        }

    },
}).mount('#app');


