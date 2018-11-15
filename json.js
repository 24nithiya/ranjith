//var json=[{"name":"ayush","age":25},{"name":"hhhh","age":23}];
//typeof(json)=object;

//var arr=[1,2,3];
//typeof(arr)=object;

console.log("1");
foo();
console.log("3");
function foo(){
	console.log("2");
}
	
	
	var json=[{"name":"ayush","age":25},{"name":"hhhh","age":23}];
	for(var i=0; i<json.length;i++){
		if(json[i].age==23){
		console.log(json[i].name);
	}
	}
	
	var json=[{"name":"ayush","age":25},{"name":"hhhh","age":23}];
	json.find((obj)=> obj.age==23);
	json.find((obj)=> obj.age=23).age;
	json.find((obj)=> obj.age=23).name;
	json.filter((obj)=> obj.age!=23);
	json.map((obj)=> obj.name);
	