Search.setIndex({docnames:["advanced-topics","api-reference/controller/device/base","api-reference/controller/device/channel","api-reference/controller/device/generic","api-reference/controller/device/hub","api-reference/controller/mixins/consumption","api-reference/controller/mixins/electricity","api-reference/controller/mixins/garage","api-reference/controller/mixins/hub","api-reference/controller/mixins/light","api-reference/controller/mixins/spray","api-reference/controller/mixins/system","api-reference/controller/mixins/toggle","api-reference/controller/subdevice/sensor","api-reference/controller/subdevice/valve","api-reference/creds","api-reference/http","api-reference/index","api-reference/manager","common-gotchas","index","installation","meross-protocol","quick-start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["advanced-topics.rst","api-reference/controller/device/base.rst","api-reference/controller/device/channel.rst","api-reference/controller/device/generic.rst","api-reference/controller/device/hub.rst","api-reference/controller/mixins/consumption.rst","api-reference/controller/mixins/electricity.rst","api-reference/controller/mixins/garage.rst","api-reference/controller/mixins/hub.rst","api-reference/controller/mixins/light.rst","api-reference/controller/mixins/spray.rst","api-reference/controller/mixins/system.rst","api-reference/controller/mixins/toggle.rst","api-reference/controller/subdevice/sensor.rst","api-reference/controller/subdevice/valve.rst","api-reference/creds.rst","api-reference/http.rst","api-reference/index.rst","api-reference/manager.rst","common-gotchas.rst","index.rst","installation.rst","meross-protocol.rst","quick-start.rst"],objects:{"meross_iot.controller.device":{BaseDevice:[1,0,1,""],ChannelInfo:[2,0,1,""],GenericSubDevice:[3,0,1,""],HubDevice:[4,0,1,""]},"meross_iot.controller.device.BaseDevice":{async_update:[1,1,1,""],channels:[1,1,1,""],default_command_timeout:[1,1,1,""],firmware_version:[1,1,1,""],hardware_version:[1,1,1,""],internal_id:[1,1,1,""],lookup_channel:[1,1,1,""],name:[1,1,1,""],online_status:[1,1,1,""],register_push_notification_handler_coroutine:[1,1,1,""],type:[1,1,1,""],unregister_push_notification_handler_coroutine:[1,1,1,""],uuid:[1,1,1,""]},"meross_iot.controller.device.GenericSubDevice":{async_get_battery_life:[3,1,1,""],async_update:[3,1,1,""],internal_id:[3,1,1,""],online_status:[3,1,1,""]},"meross_iot.controller.mixins.consumption":{ConsumptionXMixin:[5,0,1,""]},"meross_iot.controller.mixins.consumption.ConsumptionXMixin":{async_get_daily_power_consumption:[5,1,1,""]},"meross_iot.controller.mixins.electricity":{ElectricityMixin:[6,0,1,""]},"meross_iot.controller.mixins.electricity.ElectricityMixin":{async_get_instant_metrics:[6,1,1,""],get_last_sample:[6,1,1,""]},"meross_iot.controller.mixins.garage":{GarageOpenerMixin:[7,0,1,""]},"meross_iot.controller.mixins.garage.GarageOpenerMixin":{async_close:[7,1,1,""],async_open:[7,1,1,""],get_is_open:[7,1,1,""]},"meross_iot.controller.mixins.hub":{HubMixn:[8,0,1,""],HubMts100Mixin:[8,0,1,""]},"meross_iot.controller.mixins.light":{LightMixin:[9,0,1,""]},"meross_iot.controller.mixins.light.LightMixin":{async_set_light_color:[9,1,1,""],get_color_temperature:[9,1,1,""],get_light_is_on:[9,1,1,""],get_luminance:[9,1,1,""],get_rgb_color:[9,1,1,""],get_supports_luminance:[9,1,1,""],get_supports_rgb:[9,1,1,""],get_supports_temperature:[9,1,1,""]},"meross_iot.controller.mixins.spray":{SprayMixin:[10,0,1,""]},"meross_iot.controller.mixins.system":{SystemAllMixin:[11,0,1,""],SystemOnlineMixin:[11,0,1,""]},"meross_iot.controller.mixins.toggle":{ToggleMixin:[12,0,1,""],ToggleXMixin:[12,0,1,""]},"meross_iot.controller.mixins.toggle.ToggleXMixin":{async_toggle:[12,1,1,""],async_turn_off:[12,1,1,""],async_turn_on:[12,1,1,""],is_on:[12,1,1,""]},"meross_iot.http_api":{MerossHttpClient:[16,0,1,""]},"meross_iot.http_api.MerossHttpClient":{async_from_user_password:[16,1,1,""],async_invalidate_credentials:[16,1,1,""],async_list_devices:[16,1,1,""],async_list_hub_subdevices:[16,1,1,""],async_login:[16,1,1,""],async_logout:[16,1,1,""],cloud_credentials:[16,1,1,""]},"meross_iot.manager":{MerossManager:[18,0,1,""],MqttConnectionStatus:[18,0,1,""]},"meross_iot.manager.MerossManager":{async_device_discovery:[18,1,1,""],async_execute_cmd:[18,1,1,""],async_init:[18,1,1,""],find_devices:[23,1,1,""],register_push_notification_handler_coroutine:[18,1,1,""],unregister_push_notification_handler_coroutine:[18,1,1,""]},"meross_iot.model":{credentials:[15,2,0,"-"]},"meross_iot.model.credentials":{MerossCloudCreds:[15,0,1,""]},"meross_iot.model.credentials.MerossCloudCreds":{from_json:[15,1,1,""],to_json:[15,1,1,""]},meross_iot:{http_api:[16,2,0,"-"],manager:[18,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module"},terms:{"109026f18f820415eb85ffbfcd74d186abb672":16,"181f0a7fac50":16,"2de8":16,"3rd":20,"4a4f":16,"8bit":9,"9c74":16,"case":[0,16,18,19,20,22,23],"catch":0,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,15,16,18,19,23],"default":[1,6,7,9,12,22],"enum":[1,18,23],"float":[3,5,6,9,12,18],"function":[0,1,18,23],"import":[0,20,22,23],"int":[1,2,7,9,18],"long":0,"new":[0,19,22,23],"return":[1,3,5,6,7,9,12,15,16,18,23],"switch":[1,12,20],"true":[7,9,12,18],"try":[1,22],"while":19,AND:[18,23],AWS:22,DNS:22,For:[0,19,20,23],Its:1,Such:23,TLS:22,That:[0,23],The:[0,6,7,18,19,20,22,23],Then:23,There:[19,22],__main__:23,__meross_cr:16,__name__:23,__onoff:9,_md5:22,abl:[22,23],about:[19,20,22,23],abov:[21,22],absolv:23,abstracteventloop:18,abus:19,access:[19,22,23],account:[0,16,19,20,22,23],accur:6,accuraci:22,acquir:19,across:16,actual:19,actuat:23,add:[0,19],added:0,address:[19,22],advanc:20,advis:0,after:[19,23],again:[0,19,23],against:[1,16,19,22],agent:16,aim:22,albertogeniola:21,alert:23,align:19,all:[0,18,22,23],allow:[0,1,22,23],alongsid:23,alreadi:18,also:[0,18,22,23],altern:0,alwai:[0,19],ambient:23,among:22,android:22,ani:[0,1,6,16,18,19,20,22,23],anoth:22,answer:18,anyth:22,api:[16,18,19,20,22,23],api_base_url:16,app:[0,16,18,19,20,23],app_id:22,app_typ:16,app_vers:16,appli:1,applianc:22,applic:22,approach:[19,20],appropri:1,architectur:20,archiv:21,arg:[0,1,3,5,6,7,9,12,16,18],argument:[1,18,23],aris:0,around:23,ask:[16,19,22],assign:[1,18,23],associ:16,assum:22,async:[0,1,3,5,6,7,9,12,16,18,20,23],async_clos:7,async_device_discoveri:[18,23],async_execute_cmd:18,async_from_user_password:[16,23],async_get_battery_lif:3,async_get_daily_power_consumpt:5,async_get_instant_metr:[6,23],async_get_temperatur:23,async_init:[18,23],async_invalidate_credenti:16,async_list_devic:16,async_list_hub_subdevic:16,async_login:16,async_logout:[16,23],async_open:7,async_set_light_color:[9,23],async_toggl:12,async_turn_off:[12,23],async_turn_on:[12,23],async_upd:[1,3,19,23],asynchron:19,asyncio:[0,18,19,20,23],attack:22,attempt:22,attribut:[3,6],author:[22,23],auto_reconnect:18,autom:[19,20],automat:[0,1,19],avail:[22,23],avoid:[6,19,23],await:[1,18,19,23],awar:19,backend:20,backward:18,ban:[19,20,23],bandwidth:1,base64:22,base64_encoded_password:22,base64_encoded_ssid:22,base:[16,18,23],basedevic:[0,17,18,20],basic:[0,1,3,20,22,23],batteri:3,batteryinfo:3,becom:19,been:[0,1,18,22,23],befor:[0,18,19,22,23],belong:16,between:[20,22,23],bind:22,bit:[0,20,23],block:[19,20],blue:9,bodi:22,bool:[2,7,9,12,18],both:23,bought:20,bright:9,broadcast:22,broker:[18,19,20,22],build:[15,16,20,22],built:20,bulb:[9,12,20],button:[22,23],byt:[18,23],ca_cert:18,cach:[6,23],cached_http_device_list:18,calcul:[6,22],call:[6,18,19,23],callabl:[1,18],can:[0,1,9,18,19,21,22,23],capabl:[9,18,23],carefulli:23,carri:22,caus:19,cautiou:16,certif:22,chang:[0,1,19,20,23],channel:[1,5,6,7,9,12,23],channel_id_or_nam:1,channel_typ:2,channelinfo:[17,20],character:1,charg:23,che:22,check:[22,23],choos:23,chose:23,chosen:23,classmethod:[15,16],client:[17,18,20,23],clientid:22,clone:21,close:[7,19,23],cloud:[1,15,19,22],cloud_credenti:16,code:[0,21,23],collect:0,color:[9,23],color_temperatur:9,com:[16,21],combin:[6,16],command:[0,1,7,9,18,19,20,21,23],common:[20,22],commun:22,compat:18,complet:[19,23],compli:0,compos:[1,3],concaten:22,config:22,configur:[9,22,23],connect:[19,22,23],consent:22,consid:[18,20,23],constant:22,consumpt:[5,6,23],consumptionxmixin:[17,20,23],contact:19,contain:[9,16,18,23],content:22,continu:0,contrari:23,control:[0,1,2,3,4,5,6,7,8,9,10,11,12,18,20],copi:22,core:23,coro:[1,18],coro_nam:0,coroutin:[0,1,18],correctli:22,could:[19,20],counter:16,creat:[0,23],cred:16,credenti:[0,15,16,22],creds_env_var_nam:16,current:[0,1,3,6,7,9,15,19,23],current_color:23,danger:23,data:[1,5,6,16,18,20,23],datetim:15,deal:[16,18,23],deamon:0,debug:0,decid:0,dedic:0,def:[0,23],default_command_timeout:1,defin:1,definit:0,deliv:[1,19],demo:23,deprec:18,deriv:[18,23],describ:6,design:0,destination_device_uuid:18,detail:23,dev:23,develop:[0,1,19,20,22,23],devic:[1,2,3,4,5,6,9,12,16,18,19,20],device_class:[18,23],device_internal_id:[0,1],device_nam:[18,23],device_typ:[18,23],device_uuid:[1,4,5,6,7,8,9,10,11,12,18,22,23],deviceuuid:22,devid:0,dhcp:22,dict:[0,1,5,18],did:20,differ:[19,22,23],digest:22,digit:22,directori:0,dirti:23,disconnect:19,discov:[0,18,19,23],discoveri:18,discrimin:22,document:[19,23],doe:[0,19,20,22,23],doing:23,domest:22,domot:20,done:[0,16],door:[7,20],down:23,download:21,due:1,each:[9,19],easi:0,edg:19,effort:23,either:23,electr:[6,23],electricitymixin:[17,20,23],els:[19,23],email:[16,19,23],embed:1,empti:23,enabl:9,end:19,endpoint:[16,19,23],engin:22,enough:[6,22],ensur:23,enter:0,entir:23,enumer:[18,19],env:16,environ:23,equip:23,error:19,even:[0,20,22,23],event:[0,1,18,19,22],everi:[1,19,22],evt_coro:0,exact:[0,23],exampl:[0,23],exchang:0,execut:[0,1,22],expect:22,experienc:19,expir:16,explicit:22,explicitli:[18,20,22],expos:[0,1,23],fact:[20,23],failur:0,fals:[2,7,9,12,18],fast:23,featur:[0,18,20],fetch:[18,19],field:[18,23],file:0,filter:[18,22,23],find:23,find_devic:[18,23],firmwar:[1,22],firmware_vers:1,first:[19,20,22,23],flaw:22,flood:6,flow:20,fmware:22,folder:0,follow:[0,21,22,23],forbidden:22,forc:[1,23],form:22,forward:23,found:23,framework:20,frequent:23,from:[0,5,6,9,15,18,19,21,22,23],from_devic:22,from_json:15,full:[1,3,16,18],further:20,garag:[7,20],garageopenermixin:[17,20,23],gatewai:22,gather:[0,6],gener:[0,1,9,16,18,22,23],genericpushnotif:18,genericsubdevic:[17,20],get:[1,3,9,18,23],get_color_temperatur:9,get_event_loop:23,get_is_open:[7,23],get_last_sampl:6,get_light_is_on:9,get_lumin:9,get_rgb_color:[9,23],get_supports_lumin:9,get_supports_rgb:[9,23],get_supports_temperatur:9,getlogg:0,git:21,github:[0,21],given:[0,7,9,15,16],goe:23,going:20,gotcha:[20,23],green:9,guarante:22,hand:23,handl:[19,20,23],handler:[0,1,18],happen:[19,22],hard:20,hardwar:[1,20,22],hardware_vers:1,has:[0,19,22,23],have:[0,1,9,18,20,21,22,23],header:[16,22],heat:23,here:23,hex:22,him:19,histor:5,hit:19,hoc:0,hold:[15,22],host:22,hostnam:[18,22],hour:[19,22],how:[19,20,23],howev:[0,19,22,23],http:[17,18,19,20,21,22,23],http_api:[0,16,18,23],http_api_cli:23,http_client:[18,23],http_proxi:16,httpdeviceinfo:[16,18],httpstatscount:16,httpsubdeviceinfo:16,hub:[3,8,16,18,23],hub_id:16,hubdevic:[17,18,20,23],hubdevice_uuid:3,hubmixn:[17,20],hubmts100mixin:[17,20],humid:23,identifi:[1,3,16,18,22,23],ids:[18,23],ignor:[9,18],imag:22,immedi:23,immin:19,implement:[0,12,18,19,23],inconsist:19,index:[1,2,12,20],indic:16,info:[0,6,9,23],inform:[0,1,6,22,23],initi:18,input:[0,22],inspect:20,instal:20,instanc:[0,15,16,19],instant:6,instant_consumpt:23,instead:[6,16,23],instruct:22,integ:9,intens:9,intercept:0,interest:[0,12],interfac:23,intern:[1,3],internal_id:[1,3,18,23],internet:19,interv:18,introduc:20,invalid:16,invok:[0,1,16,18,19,23],iot:[16,21],is_heat:23,is_master_channel:2,is_on:[12,23],isoformat:23,issu:[16,18,21,23],issued_on:15,iter:[18,23],its:[0,3,18,22],itself:22,json:[15,22],json_str:15,keep:[16,19,23],kei:[15,22],keyword:19,kind:22,know:[20,23],known:18,kwarg:[0,1,3,4,5,6,7,8,9,10,11,12,16],kword:18,last_sampled_humid:23,last_sampled_temperatur:23,last_sampled_tim:23,latest:[18,21,23],lead:20,least:[9,18,23],left:18,len:23,let:[20,23],level:0,leverag:20,librari:[0,1,3,19,21,22,23],light:[9,18,23],lightmixin:[17,18,20,23],like:[0,23],limit:[0,1,19,20],line:19,list:[1,5,16,18,20],listen:[0,19],liter:22,local:[18,22],log:[16,19,20,22],log_identifi:16,logic:[18,23],login:[16,22],logout:[16,19,23],longer:0,look:[1,20,23],lookup_channel:1,loop:[18,19,23],loos:19,lost:19,low:0,lower:22,lowercas:22,lumin:[9,23],mac:22,macaddress:22,machin:19,magnet:23,mai:[0,6,19,22],main:23,make:[0,16,19,21,22],malici:22,manag:[0,1,3,4,5,6,7,8,9,10,11,12,18,23],manger:18,mani:[16,19,22],manual:[21,23],mark:23,market:0,master:1,match:[0,18,22,23],matter:0,max:23,max_supported_temperatur:23,maximum:18,md5:22,meant:20,measur:6,meross:[0,1,3,15,16,18,19,20,21,23],meross_:22,meross_devic:23,meross_device_uuid:18,meross_email:23,meross_iot:[0,1,2,3,4,5,6,7,8,9,10,11,12,15,16,18,23],meross_password:23,meross_root_logg:0,meross_sniff:0,merosscloudcr:[15,16],merosscloudcredenti:[16,17,20],merosshttpcli:[0,16,18,19,23],merossiot:[0,16,18,21,23],merossmanag:[0,17,19,20,23],merosssnif:0,messag:[0,19,22],message_id:22,messageid:22,method:[0,1,6,16,18,19,22,23],metric:6,might:[1,16,19,20,23],min:23,min_supported_temperatur:23,mind:20,mixin:[5,6,7,8,9,10,11,12,18,23],mode:[9,22,23],model:[1,3,6,15,16,18,23],modifi:0,modul:[0,20],moment:19,monitor:23,more:[0,16,18,22,23],most:[0,1,19,20,22,23],motor:23,mount:23,mqtt:[1,18,19,20,23],mqtt_host:22,mqtt_hostnam:18,mqtt_port:[18,22],mqtt_skip_cert_valid:18,mqttconnectionstatu:18,ms100:23,ms100sensor:[17,18,20,23],msl120:[9,18,23],mss210:22,mss310:[18,23],mts100v3:23,mts100v3valv:[17,18,20,23],multi:1,multipl:[18,23],must:[0,1,9,18,19,22],name:[0,1,2,18,22,23],namespac:[0,1,18,22],nativ:[16,18,23],need:[0,1,7,19,23],neighborhood:22,network:[0,1,20,22],new_temp:23,none:[1,2,3,5,6,7,9,12,16,18,23],note:[6,9,18,20,22,23],notic:19,notif:[1,18,19,20],notifi:18,notificaiton:0,now:[20,22],number:[0,19,23],numer:22,object:[1,6,15,16,18,19],obtain:[16,22],occur:[0,19],off:[9,12,23],offer:[6,23],offici:20,offlin:18,often:6,omissi:0,omit:22,on_off:23,onc:[0,22,23],one:[0,9,18,22,23],ones:[19,23],onli:[1,9,18,21,22,23],onlin:[0,1,3,18,23],online_statu:[1,3,18,23],onlinestatu:[18,23],onoff:9,open:[7,20,22],open_statu:23,oper:[1,7,9,12,23],operations__:9,option:[2,3,5,6,7,9,12,16,18,23],order:[0,18,19,22,23],origin:0,other:[1,19,22,23],otherwis:[7,9],outcom:22,over:[0,1],overrid:1,own:23,page:20,pair:20,panoram:23,param:[1,7,15,16,18],paramet:[1,5,6,7,9,12,16,18,22,23],parti:20,particular:18,pass:[0,18],password:[0,16,22,23],path:22,pattern:[19,20],payload:[18,22],peopl:20,perfom:3,perform:[0,16,18,19,20,22],phase:22,physic:22,piec:20,pip:21,pipi:21,place:20,plai:[0,23],plan:20,pleas:[6,9,20],plu:[1,3],plug:[22,23],plug_ip_address:22,plugin:[3,6,20],point:22,poll:[3,6],port:[18,22],portion:22,possibl:[0,16,22],post:22,power:[5,6,23],powerinfo:6,preced:[1,19],prefix:[1,3,22],press:[0,22,23],pretti:0,prevent:[0,19],previous:[1,6,15,18,19],print:23,proactoreventloop:19,probabl:20,product:20,program:[0,1,20],proper:23,properli:19,properti:[1,3,16,23],protocol:20,provid:[16,18,20,22,23],proxi:16,proxim:23,publish:22,pull:22,push:[1,18,19,20],put:22,python:[0,19,20,21],queri:23,quick:20,quickli:23,quit:23,rais:0,randint:23,random:23,randomli:23,rate:[19,20],rather:[6,23],reach:19,react:[0,1],read:[5,6,20],readonli:23,realli:23,reason:[0,19,20,23],reboot:22,receiv:[0,1,18,19,22],recent:[6,23],recipi:23,recogn:22,red:9,refer:[6,20,23],refresh:6,refus:16,regist:[0,1,5,18,23],register_push_notification_handler_coroutin:[0,1,18],registri:18,rel:[18,23],relat:19,releas:[0,19],reli:[0,6,20,23],remov:[0,19],report:[0,18,22,23],repres:[1,22],represent:1,republish:22,request:[16,19,22],requir:21,respect:23,respons:[0,16,22,23],restor:19,restrict:18,result:[18,19,23],resum:22,retriev:[18,22,23],revers:22,revis:1,rgb:[9,23],right:20,risk:23,rout:22,run:[0,1,19],run_until_complet:23,runtimeerror:19,safe:23,same:16,sampl:23,sample_timestamp:6,satisfi:[18,23],scan:22,script:[0,19,23],search:[20,23],second:[18,22],secret:22,section:[19,22,23],secur:[19,22],see:23,seem:22,select:0,send:[0,7,18,19,22,23],sens:[6,23],sensit:[0,18,23],sensor:[18,20],sent:[18,22],separ:22,sequenc:22,serial:15,seriou:22,serv:22,server:22,session:16,set:[16,18,22,23],set_event_loop_polici:[19,23],setlevel:0,setup:[19,23],sever:0,should:[0,1,6,16,18,19,20,22,23],show:23,shown:0,sign:22,signal:23,signatur:[0,1,18,22,23],similarli:[0,18,23],simpl:22,simpli:22,simplifi:16,simul:23,sinc:22,situat:19,skip:18,sleep:23,smart:[0,12,23],snif:[0,22],sniff:20,sniffer:0,snippet:[0,23],solv:19,some:[1,3,19,20,23],somehow:23,someon:[19,23],someth:0,soon:[20,23],sourc:21,specif:[0,1,16,22,23],specifi:[9,12,16,18,23],spoof:22,sprai:10,spraymixin:[17,20],ssid:22,ssl:22,standard:0,start:[0,19,20,22],stat:[12,16],state:[1,9,12,19,22,23],stats_count:16,statu:[0,1,3,7,12,18,19,23],step:22,stick:0,still:22,stop:0,store:16,str1:22,str2:22,str:[0,1,2,3,4,5,6,7,8,9,10,11,12,15,16,18,23],straight:23,strategi:19,strictli:1,string:[15,18,22,23],strongli:0,structur:18,stuff:20,sub:16,subdevic:[16,18,23],subdevice_id:3,subscrib:22,succe:22,success:22,suffix:[1,3],suitabl:20,support:[0,9,12,18,23],sure:[0,16,19,21],suspend:19,suspens:19,system:11,systemallmixin:[17,20],systemonlinemixin:[17,20],take:[0,1,20],taken:23,target:23,target_device_uuid:22,target_temperatur:23,task:20,team:19,tell:[9,18,22,23],temp:23,temperatur:[9,23],test:0,than:[6,23],thei:[0,23],them:23,themselv:23,thermostat:20,thi:[0,1,3,5,6,9,12,16,18,19,21,22,23],thing:[20,23],those:23,though:0,three:9,time:[16,18,19,20,22,23],timeout:[1,3,5,6,9,12,18],timestamp:22,to_json:15,todo:0,toggl:[9,12,18,23],togglemixin:[17,20,23],togglex:[9,12,18,23],togglexmixin:[17,18,20,23],togglexmixn:23,token:[15,16,19],too:[16,19,20,23],tool:0,top:19,topic:[20,22],track:23,traffic:[20,22],treat:22,tri:22,trigger:23,triggersrc:22,tropic:22,tupl:9,ture:23,turn:[9,12,23],two:22,txt:21,type:[1,16,18,22,23],ua_head:16,unavail:1,uncom:23,underscor:22,understand:20,unfortun:23,union:[1,15,18,23],uniqu:22,unknown:[1,18,22],unoffici:20,unregist:[0,1,18],unregister_push_notification_handler_coroutin:[0,1,18],unsupport:20,untrust:22,unzip:21,updat:[1,3,18,19,22,23],update_subdevice_statu:18,upgrad:21,upload:0,upon:1,url:16,usag:16,use:[0,16,19,20,22,23],used:[1,3,9,16,18,19,20,22,23],user:[0,1,15,16,18,19,22,23],user_email:15,user_id:[15,22],userid:22,usernam:[16,22],uses:[18,22],using:[0,16,19,22],usual:[1,9,19],util:[0,15,16],uuid:[1,16,18,22,23],valid:22,valu:[6,9,22,23],valv:[18,23],vari:9,variabl:16,verbos:0,veri:23,version:[1,16],via:[0,1,9,18,22,23],voltag:[6,23],wai:[0,19,20],wait:[0,18,23],want:[0,18,20,21],warn:[0,19],warranti:20,well:[20,23],when:[0,1,9,12,16,18,19,23],whenev:[1,18],where:[0,6,9,22],which:[0,7,16,18,19,20,22,23],whole:[18,23],why:23,wifi:22,window:19,windowsselectoreventlooppolici:[19,23],within:23,without:[16,19,22],won:22,word:22,work:[19,20,21,23],would:[18,23],write:[19,22,23],wrong:19,yet:0,you:[0,1,6,16,18,19,20,21,23],your:[0,1,19,23],your_meross_cloud_email:23,your_meross_cloud_password:23,zip:0},titles:["Advanced topics","BaseDevice","ChannelInfo","GenericSubDevice","HubDevice","ConsumptionXMixin","ElectricityMixin","GarageOpenerMixin","HubMixn","LightMixin","SprayMixin","SystemAllMixin","ToggleXMixin","Ms100Sensor","Mts100v3Valve","MerossCloudCredentials","HTTP Client","API Reference","MerossManager","Common gotchas","Welcome to MerossIot Library\u2019s documentation!","Installation","Meross Protocol Inspection","Quick start"],titleterms:{"switch":23,advanc:0,api:17,app:22,architectur:22,basedevic:1,befor:20,bulb:23,channelinfo:2,client:[16,22],command:22,common:19,consumptionxmixin:5,content:20,control:23,data:0,devic:[0,22,23],document:20,door:23,electricitymixin:6,flow:22,garag:23,garageopenermixin:7,genericsubdevic:3,gotcha:19,handl:0,http:16,hubdevic:4,hubmixn:8,hubmts100mixin:8,indic:20,inspect:22,instal:21,librari:20,lightmixin:9,list:23,log:0,meross:22,merosscloudcredenti:15,merossiot:20,merossmanag:18,mqtt:22,ms100sensor:13,mts100v3valv:14,notif:[0,22],open:23,pair:22,protocol:22,push:[0,22],quick:23,read:23,refer:17,sensor:23,sniff:0,spraymixin:10,start:23,systemallmixin:11,systemonlinemixin:11,tabl:20,thermostat:23,thi:20,togglemixin:12,togglexmixin:12,topic:0,using:20,welcom:20}})