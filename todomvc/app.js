var filters = {
  all:function(items){
    return items;
  },
  active:function(items){
    return items.filter(function(item){
        return !item.finished;
      });
  },
  finished:function(items){
    return items.filter(function(item){
        return item.finished;
      });
  }

}

new Vue({
	el:'#todoapp',
  data:{
  	content:'press enter to finish add ',
    items:[],
    edit:false,
    visibility:'all',
    filterItems:[],
  },
  methods:{
    filter:function(visibility){
      this.visibility = visibility;
    },
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
  },
  watch:{
    items:function(){
      this.filterItems = filters[this.visibility](this.items);
    },
    visibility:function(){
      this.filterItems = filters[this.visibility](this.items);
    }
  }

});

