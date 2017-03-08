new Vue({
	el:'#todoapp',
  data:{
  	content:'press enter to finish add ',
    items:[],
    edit:false
  },
  methods:{
  	clear:function(){
    	this.content = '';
    },
  	addItem:function(){
    	this.items.push({
      	title:this.content,
        finished:false,
        edit:false
        });
        this.clear();
    },
    editItem:function(item){
    	if(item.finished){
      	return;
      }
      this.items.forEach(function(i){
      	if(i!== item){
        	i.edit = false;
        }
      })
      this.cache = item.title;
      item.edit = true;
      
    },
    finishEdit:function(item){
    	item.edit = false;
    },
    quitEdit:function(item){
    	item.title = this.cache;
      item.edit = false;
    }
  }
})