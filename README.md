Auto Complete Feature :

Cache last two results and first letter search result

Scenarios :

1) User appends a new character : The last result feeds the input set for a search with scenario 1 , so lookup happens on a already filtered set
2) User deletes a character : The second last result has to be shown directly to him
3) User deletes more than one character successively : Run a search again on the first character search results .

Example :

functions used :
	search(string_to_be_searched,dataset_to_search_in) returns array of searched result
	cache_add(data,index) return boolean indicating cache save confimed or not
	cache_delete(index) return boolean indicating cache save confirmed or not
	cache_fetch(index) return cache data at that index


Search sequence :

A       : search('A',fullData) , cache_add(resultFromFullData,0)
Am      : search('Am',resultFromFullData) , cache_add(resultFromAm,1)
Ama     : search('Ama',resultFromAm) , cache_add(resultFromAma,2)
Aman    : search('Aman',resultFromAma) , cache_add(resultFromAman,3) , cache_delete(length-3)...cache_delete(1)
Aman J  : same as above
Aman Ju : same as above
Aman J  : return cache index [length-1]
Aman    : search('Aman',cache_fetch(0))
Ama     : search('Ama',cache_fetch(0))