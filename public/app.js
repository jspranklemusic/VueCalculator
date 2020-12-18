const app = Vue.createApp({
    data(){
        return{
            nums:"",
            result:""
        }
    },
 
    methods:{
        displayNum(num){
        if(!this.result){
            this.nums+=num
        }else{
            this.nums=this.result
            this.nums+=num
        }
        
        this.result=""
        },
        clearNum(){
            this.nums=""
            this.result=""
        },
        calcNum(){
            this.result=eval(this.nums)
            if(!this.result){
                this.result="undefined"
            }
            
           
        }
    },
    mounted() {
        this.$nextTick(function () {
          window.addEventListener("keydown",e=>{
              if(e.keyCode==13){
                  this.calcNum()
              }
          })
        })
      }
      
  
})
app.mount("#body")