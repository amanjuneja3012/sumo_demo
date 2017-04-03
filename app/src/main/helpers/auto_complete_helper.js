var last_search = '';
var SearchCache = new cache
const fullData = [
	{team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik','Leah Shumway']},
	{team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},   {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},   {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
]

export function processAndTriggerSearch(string,type){
	var searchResult = [];
	if(string.length==0 && (last_search.length>0)){
			searchResult = [];
			SearchCache.resetCache();
	}
	else if(string.length==1){
			searchResult = search(type,string,fullData);
			SearchCache.setCacheData(1,searchResult);
	}
	else if( last_search.length < string.length ){
		searchResult = search(type,string,SearchCache.getCacheData(string.length-1));
		SearchCache.setCacheData(string.length,searchResult);
	}
	else{
		if(SearchCache.getCacheData(string.length) && SearchCache.getCacheData(string.length).length){
			searchResult = (SearchCache.getCacheData(string.length));
			console.log('cache hit');
			SearchCache.clearCacheData(string.length);
		}
		else{
			search(type,string,SearchCache.getCacheData(1));
		}
	}
	last_search = string;
	console.log(searchResult);
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

function search(type,string,dataSet){
	var target = dataSet;
	if(!(dataSet &&dataSet.length)){
		target = fullData;
	}
	if(type=='team'){
		return dataSet.filter(function(dataRow){
			return (dataRow[type].toLowerCase().indexOf(string.toLowerCase())>-1)
		})
	}
	else if(type=='employees'){
		var result = dataSet.map(function(dataRow){
			var target = (dataRow.hasOwnProperty('employees'))?dataRow[type]:dataRow
			var final_arr = target.filter(function(str){
				debugger
				return (str.toLowerCase().indexOf(string.toLowerCase())>-1)
			})
			return final_arr;
		})
		return result
	}
}