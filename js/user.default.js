
function sendRequest_jquery(action,callback,postData){
	var msg = '';
	$.ajax({
		type:"POST",url:action,data:postData,
		success:function(response){callback(response);}
	});
	return msg;
}

function user_list(){
	var searchHp = $("#searchHp").val();
	var postData = {
		"request": "conference",
		"result":
			[
				{ "key": "r_search", "value": "phone"},
				{ "key": "r_keyword", "value": searchHp}
			]
	};
	$.ajax({
        url : "proxyArr.jsp?http://inf.e-mpark.com/conference_search",
        contentType: 'application/json; charset=utf-8',
        type:"post",
        dataType : "json",
        data : JSON.stringify(postData),
        success:function (response){
        		var f_obj = response[0];
        		if(f_obj.return == null){
        			// 검색 결과를 테이블에 넣기
        			var cnt = response.length;
        			var vobj = document.getElementById('tb_list');
        			var objRowCnt = vobj.rows.length;
        			for(var i=objRowCnt;i>1;i--){
        				var objRow = vobj.deleteRow(i-1);
        			}
        			if(vobj != null){
        				for(var i=0;i<cnt;i++){
                			var objRowCnt = vobj.rows.length;
                			var objRow = vobj.insertRow(objRowCnt);
                			var objs = response[i].conference_user;
                			for(var j=0;j<5;j++){
                				var objCell = objRow.insertCell(j);
                				objCell.align = "center";
                				if(j==0){
                					objCell.innerHTML = objs.id;
                				}else if(j==1){
                					objCell.innerHTML = objs.mobile;
                				}else if(j==2){
                					objCell.innerHTML = objs.email;
                					
                				}else if(j==3){
                					objCell.innerHTML = objs.name;
                					
                				}else if(j==4){
                					if(objs.is_join == "True"){
                						objCell.innerHTML = "O";
                					}else{
                    					objCell.innerHTML = objs.is_join;
                    					objCell.innerHTML = "<input type=\"button\" onClick=\"is_join_update("+objs.id+")\" value=\"참가\"/>";
                					}
                					
                				}
                			}
        				}
        			}        			
        		}else{
        			// 검색 결과가 없습니다
        			//alert(f_obj.return);
        			var vobj = document.getElementById('tb_list');
        			var objRowCnt = vobj.rows.length;
        			for(var i=objRowCnt;i>1;i--){
        				var objRow = vobj.deleteRow(i-1);
        			}
        			console.log('000000000');
        			var objRowCnt = vobj.rows.length;
        			var objRow = vobj.insertRow(objRowCnt);
        			var objCell = objRow.insertCell(0);
        			objCell.colSpan=5;
        			objCell.align="center";
        			objCell.innerHTML="검색결과가 없습니다.";
        		}
        }
   });
	
}
function is_join_update(id){
	if(confirm("참가완료 하시겠습니까?") == true){
		var postData = {
			    "request": "member",
			    "update":
			        [
			            { "key": "r_conferenceID", "value": id },
			            { "key": "r_is_join", "value": "True" }
			        ]
			};
		$.ajax({
	        url : "proxy.jsp?http://inf.e-mpark.com/conference_joinupdate",
	        contentType: 'application/json; charset=utf-8',
	        type:"post",
	        dataType : "json",
	        data : JSON.stringify(postData),
	        success:function (response){
	        		if(response.returncode == "UPDATE OK"){
	        			alert("참가완료");
	        			//location.reload();
	        			var searchHp = $("#searchHp").val();
	        			location.href = "./register.jsp?searchHp="+searchHp+"#tab1";
	        		}else{
	        			alert("ID를 찾을수 없어서 참가완료 중 ERROR 발생");
	        		}
	        }
	      });
	}
}


function count_init(){
	var postData = {};
	$.ajax({
        url : "proxy.jsp?http://inf.e-mpark.com/conference_count",
        contentType: 'application/json; charset=utf-8',
        type:"post",
        dataType : "json",
        data : postData,
        success:function (response){
        		if(response.return == null){
        			//alert("ok");
        			$("#all_cnt").html((Number(response.joinonline)+Number(response.joinoffline))+"명");
        			$("#online_cnt").html(response.joinonline+"명");
        			$("#offline_cnt").html(response.joinoffline+"명");
        		}else{
        			$("#all_cnt").html("0명");
        			$("#online_cnt").html("0명");
        			$("#offline_cnt").html("0명");
        		}
        }
      });
}



