var last_search = '';
var SearchCache = new cache
const fullData = [
	{team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik','Leah Shumway']},
	{team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
	{team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
	{team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
]

export function processAndTriggerSearch(input_string,type,selected_team){
	debugger
	var searchResult = [];
	var string = input_string.trim();
	if(string.length==0){
			searchResult = search(type,string,fullData,selected_team);
			SearchCache.resetCache();
	}
	else if(string.length==1){
			searchResult = search(type,string,fullData,selected_team);
			SearchCache.setCacheData(1,searchResult);
	}
	else if( last_search.length < string.length ){
		searchResult = search(type,string,SearchCache.getCacheData(string.length-1),selected_team);
		SearchCache.setCacheData(string.length,searchResult);
	}
	else{
		if(SearchCache.getCacheData(string.length) && SearchCache.getCacheData(string.length).length){
			searchResult = (SearchCache.getCacheData(string.length));
			console.log('cache hit');
			SearchCache.clearCacheData(string.length);
		}
		else{
			search(type,string,SearchCache.getCacheData(1),selected_team);
		}
	}
	last_search = string;
	return searchResult;
}

function cache (){
	this.data = [];
	this.getCacheData = function(index){
		return this.data[index];
	}
	this.getFullCacheData = function(index){
		return this.data;
	}
	this.getCacheLength = function(){
		return this.data.length;
	}
	this.setCacheData = function(index,data){
		this.data[index] = data;
	}
	this.clearCacheData = function(index){
		delete this.data[index];
	}
	this.resetCache = function(){
		this.data = [];
	}
}

function search(type,string,dataSet,selected_team){
	var target = dataSet;
	if(!(dataSet &&dataSet.length)){
		target = fullData;
	}
	if(!string.length){
		debugger
		if(type=='team'){
			return dataSet.filter(function(dataRow){
				return true;
			})
		}
		else if(type=='employees'){
			var result = dataSet.map(function(dataRow){
				var target = (dataRow.hasOwnProperty('employees'))?dataRow[type]:dataRow
				var final_arr = target.filter(function(str){
					return true;
				})
				return final_arr;
			})
			return result;
		}
	}
	else if(type=='team'){
		return dataSet.filter(function(dataRow){
			return (dataRow[type].toLowerCase().indexOf(string.toLowerCase())>-1)
		})
	}
	else if(type=='employees'){
		var result = dataSet.map(function(dataRow){
			var target = (dataRow.hasOwnProperty('employees'))?dataRow[type]:dataRow
			var team = (dataRow.hasOwnProperty('team'))?dataRow.team:fetchTeam(target);
			var final_arr = target.filter(function(str){
				return ((str.toLowerCase().indexOf(string.toLowerCase())>-1)&&(team==selected_team))
			})
			return final_arr;
		})
		return result;
	}
}

function fetchTeam(array){
	var team = '';
	fullData.forEach((obj)=>{
		obj.employees.forEach((employee)=>{
			array.forEach((el)=>{
				if(el==employee){
					team = obj.team;
				}
			})
		})
	})
	return team;
}