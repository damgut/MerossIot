Search.setIndex({docnames:["advanced-topics","api-reference/controller/device/base","api-reference/controller/device/channel","api-reference/controller/device/generic","api-reference/controller/device/hub","api-reference/controller/mixins/consumption","api-reference/controller/mixins/electricity","api-reference/controller/mixins/garage","api-reference/controller/mixins/hub","api-reference/controller/mixins/light","api-reference/controller/mixins/spray","api-reference/controller/mixins/system","api-reference/controller/mixins/toggle","api-reference/controller/subdevice/sensor","api-reference/controller/subdevice/valve","api-reference/creds","api-reference/http","api-reference/index","api-reference/manager","api-reference/stats","common-gotchas","index","installation","meross-protocol","quick-start"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["advanced-topics.rst","api-reference/controller/device/base.rst","api-reference/controller/device/channel.rst","api-reference/controller/device/generic.rst","api-reference/controller/device/hub.rst","api-reference/controller/mixins/consumption.rst","api-reference/controller/mixins/electricity.rst","api-reference/controller/mixins/garage.rst","api-reference/controller/mixins/hub.rst","api-reference/controller/mixins/light.rst","api-reference/controller/mixins/spray.rst","api-reference/controller/mixins/system.rst","api-reference/controller/mixins/toggle.rst","api-reference/controller/subdevice/sensor.rst","api-reference/controller/subdevice/valve.rst","api-reference/creds.rst","api-reference/http.rst","api-reference/index.rst","api-reference/manager.rst","api-reference/stats.rst","common-gotchas.rst","index.rst","installation.rst","meross-protocol.rst","quick-start.rst"],objects:{"meross_iot.controller.device":{BaseDevice:[1,0,1,""],ChannelInfo:[2,0,1,""],GenericSubDevice:[3,0,1,""],HubDevice:[4,0,1,""]},"meross_iot.controller.device.BaseDevice":{async_update:[1,1,1,""],channels:[1,1,1,""],firmware_version:[1,1,1,""],hardware_version:[1,1,1,""],internal_id:[1,1,1,""],lookup_channel:[1,1,1,""],name:[1,1,1,""],online_status:[1,1,1,""],register_push_notification_handler_coroutine:[1,1,1,""],type:[1,1,1,""],unregister_push_notification_handler_coroutine:[1,1,1,""],uuid:[1,1,1,""]},"meross_iot.controller.device.GenericSubDevice":{async_get_battery_life:[3,1,1,""],async_update:[3,1,1,""],internal_id:[3,1,1,""],online_status:[3,1,1,""]},"meross_iot.controller.known.subdevice":{Ms100Sensor:[13,0,1,""],Mts100v3Valve:[14,0,1,""]},"meross_iot.controller.known.subdevice.Ms100Sensor":{last_sampled_humidity:[13,1,1,""],last_sampled_temperature:[13,1,1,""],last_sampled_time:[13,1,1,""],max_supported_temperature:[13,1,1,""],min_supported_temperature:[13,1,1,""]},"meross_iot.controller.known.subdevice.Mts100v3Valve":{adjust:[14,1,1,""],async_get_adjust:[14,1,1,""],async_get_temperature:[14,1,1,""],async_set_preset_temperature:[14,1,1,""],get_preset_temperature:[14,1,1,""],get_supported_presets:[14,1,1,""],last_sampled_temperature:[14,1,1,""],last_sampled_time:[14,1,1,""]},"meross_iot.controller.mixins.consumption":{ConsumptionXMixin:[5,0,1,""]},"meross_iot.controller.mixins.consumption.ConsumptionXMixin":{async_get_daily_power_consumption:[5,1,1,""]},"meross_iot.controller.mixins.electricity":{ElectricityMixin:[6,0,1,""]},"meross_iot.controller.mixins.electricity.ElectricityMixin":{async_get_instant_metrics:[6,1,1,""],get_last_sample:[6,1,1,""]},"meross_iot.controller.mixins.garage":{GarageOpenerMixin:[7,0,1,""]},"meross_iot.controller.mixins.garage.GarageOpenerMixin":{async_close:[7,1,1,""],async_open:[7,1,1,""],get_is_open:[7,1,1,""]},"meross_iot.controller.mixins.hub":{HubMixn:[8,0,1,""],HubMts100Mixin:[8,0,1,""]},"meross_iot.controller.mixins.light":{LightMixin:[9,0,1,""]},"meross_iot.controller.mixins.light.LightMixin":{async_set_light_color:[9,1,1,""],get_color_temperature:[9,1,1,""],get_light_is_on:[9,1,1,""],get_luminance:[9,1,1,""],get_rgb_color:[9,1,1,""],get_supports_luminance:[9,1,1,""],get_supports_rgb:[9,1,1,""],get_supports_temperature:[9,1,1,""]},"meross_iot.controller.mixins.spray":{SprayMixin:[10,0,1,""]},"meross_iot.controller.mixins.system":{SystemAllMixin:[11,0,1,""],SystemOnlineMixin:[11,0,1,""]},"meross_iot.controller.mixins.toggle":{ToggleMixin:[12,0,1,""],ToggleXMixin:[12,0,1,""]},"meross_iot.controller.mixins.toggle.ToggleXMixin":{async_toggle:[12,1,1,""],async_turn_off:[12,1,1,""],async_turn_on:[12,1,1,""],is_on:[12,1,1,""]},"meross_iot.http_api":{ErrorCodes:[16,0,1,""],MerossHttpClient:[16,0,1,""]},"meross_iot.http_api.ErrorCodes":{CODE_BAD_PASSWORD_FORMAT:[16,3,1,""],CODE_DISABLED_OR_DELETED_ACCOUNT:[16,3,1,""],CODE_GENERIC_ERROR:[16,3,1,""],CODE_INVALID_EMAIL:[16,3,1,""],CODE_MISSING_PASSWORD:[16,3,1,""],CODE_NO_ERROR:[16,3,1,""],CODE_TOKEN_ERROR:[16,3,1,""],CODE_TOKEN_EXPIRED:[16,3,1,""],CODE_TOKEN_INVALID:[16,3,1,""],CODE_TOO_MANY_TOKENS:[16,3,1,""],CODE_UNEXISTING_ACCOUNT:[16,3,1,""],CODE_WRONG_CREDENTIALS:[16,3,1,""],CODE_WRONG_EMAIL:[16,3,1,""]},"meross_iot.http_api.MerossHttpClient":{async_from_user_password:[16,1,1,""],async_invalidate_credentials:[16,1,1,""],async_list_devices:[16,1,1,""],async_list_hub_subdevices:[16,1,1,""],async_login:[16,1,1,""],async_logout:[16,1,1,""],cloud_credentials:[16,1,1,""]},"meross_iot.manager":{MerossManager:[18,0,1,""]},"meross_iot.manager.MerossManager":{async_device_discovery:[18,1,1,""],async_execute_cmd:[18,1,1,""],async_init:[18,1,1,""],find_devices:[24,1,1,""],mqtt_call_stats:[18,1,1,""],register_push_notification_handler_coroutine:[18,1,1,""],unregister_push_notification_handler_coroutine:[18,1,1,""]},"meross_iot.model":{credentials:[15,2,0,"-"]},"meross_iot.model.credentials":{MerossCloudCreds:[15,0,1,""]},"meross_iot.model.credentials.MerossCloudCreds":{from_json:[15,1,1,""],to_json:[15,1,1,""]},"meross_iot.utilities":{stats:[19,2,0,"-"]},"meross_iot.utilities.stats":{ApiCallSample:[19,0,1,""],ApiCounter:[19,0,1,""],ApiStat:[19,0,1,""],ApiStatsResult:[19,0,1,""]},"meross_iot.utilities.stats.ApiCallSample":{device_uuid:[19,1,1,""],method:[19,1,1,""],namespace:[19,1,1,""],timestamp:[19,1,1,""]},"meross_iot.utilities.stats.ApiCounter":{get_api_stats:[19,1,1,""],get_delayed_api_stats:[19,1,1,""],get_dropped_api_stats:[19,1,1,""],notify_api_call:[19,1,1,""],notify_delayed_call:[19,1,1,""],notify_dropped_call:[19,1,1,""]},"meross_iot.utilities.stats.ApiStat":{by_method_namespace:[19,1,1,""],total_calls:[19,1,1,""]},"meross_iot.utilities.stats.ApiStatsResult":{device_stats:[19,1,1,""],global_stats:[19,1,1,""],stats_by_uuid:[19,1,1,""]},meross_iot:{http_api:[16,2,0,"-"],manager:[18,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:attribute"},terms:{"3rd":21,"8bit":9,"case":[0,16,18,20,21,23,24],"catch":0,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,24],"default":[6,7,9,12,23],"enum":[1,18,24],"float":[13,14,18,19],"function":[0,1,13,18,24],"import":[0,21,23,24],"int":[1,2,7,9,18,19],"long":0,"new":[0,20,23,24],"return":[0,1,3,5,6,7,9,12,13,14,15,16,18,19,24],"static":14,"switch":[1,12,21],"true":[1,3,5,6,7,9,12,14,18],"try":[1,3,23],"while":20,AND:[18,24],AWS:23,DNS:23,For:[0,20,21,24],Its:1,Not:16,Such:24,TLS:23,That:[0,24],The:[0,6,7,13,18,20,21,23,24],Then:24,There:[20,23],__main__:24,__meross_cr:16,__name__:24,__onoff:9,_md5:23,abl:[23,24],about:[0,20,21,23,24],abov:[22,23],absolv:24,abstracteventloop:18,abus:20,access:[0,20,23,24],accordingli:[0,18],account:[0,16,20,21,23,24],accur:6,accuraci:23,acquir:20,across:16,actual:20,actuat:24,add:[0,20],added:0,address:[16,20,23],adjust:14,adopt:20,advanc:21,advis:0,after:[20,24],again:[0,20,24],against:[0,16,20,23],aggreg:19,aim:23,albertogeniola:22,alert:[13,24],align:20,all:[0,18,23,24],allow:[0,1,23,24],alongsid:24,alreadi:18,also:[0,18,23,24],altern:0,alwai:[0,20],ambient:24,among:23,ani:[0,1,6,16,18,19,20,21,23,24],anoth:23,answer:18,anyth:23,api:[0,16,18,19,20,21,23,24],api_base_url:16,apicallsampl:19,apicount:[0,19],apistat:19,apistatsresult:19,app:[0,18,20,21,24],app_id:23,appli:20,applianc:23,applic:23,approach:[20,21],architectur:21,archiv:22,arg:[0,1,3,5,6,7,9,12,14,16,18],argument:[18,24],aris:0,around:24,ask:[16,20,23],assign:[1,18,24],associ:16,assum:23,async:[0,1,3,5,6,7,9,12,14,16,18,21,24],async_clos:7,async_device_discoveri:[18,24],async_execute_cmd:18,async_from_user_password:[0,16,24],async_get_adjust:14,async_get_battery_lif:3,async_get_daily_power_consumpt:5,async_get_instant_metr:[6,24],async_get_temperatur:[14,24],async_init:[18,24],async_invalidate_credenti:16,async_list_devic:16,async_list_hub_subdevic:16,async_login:16,async_logout:[16,24],async_open:7,async_set_light_color:[9,24],async_set_preset_temperatur:14,async_toggl:12,async_turn_off:[12,24],async_turn_on:[12,24],async_upd:[1,3,13,20,24],asynchron:20,asyncio:[0,18,20,21,24],attack:23,attempt:23,attribut:6,author:[23,24],auto_reconnect:18,autom:[20,21],automat:[0,1,3,20],avail:[13,14,23,24],avoid:[6,20,24],await:[0,1,18,20,24],awar:20,backend:21,backoff:0,bad:16,ban:[20,21,24],bandwidth:[1,3],base64:23,base64_encoded_password:23,base64_encoded_ssid:23,base:[0,16,18,24],basedevic:[0,17,18,21],basic:[0,1,3,21,23,24],batteri:3,batteryinfo:3,becom:20,been:[0,1,13,14,16,18,19,23,24],befor:[0,18,20,23,24],being:19,belong:16,below:0,better:0,between:[21,23,24],bind:23,bit:[0,21,24],block:[20,21],blue:9,bodi:23,bool:[1,2,3,5,6,7,9,12,14,18],both:[0,24],bought:21,box:0,bright:9,broadcast:23,broker:[0,18,19,20,21,23],bucket:0,build:[0,15,16,21,23],built:21,bulb:[9,12,21],burst_rat:0,button:[23,24],by_method_namespac:19,byt:[18,24],ca_cert:18,cach:[6,14,24],calcul:[0,6,19,23],call:[6,13,18,19,20,21,24],callabl:[1,18],can:[0,1,9,13,18,20,22,23,24],capabl:[9,13,18,24],carefulli:24,carri:23,caus:20,cautiou:16,celsiu:[13,14],certif:23,chang:[0,1,20,21,24],channel:[1,5,6,7,9,12,24],channel_id_or_nam:1,channel_typ:2,channelinfo:[17,21],character:1,charg:24,che:23,check:[0,23,24],choos:24,chose:24,chosen:24,classmethod:[15,16],client:[17,18,21,24],clientid:23,clone:22,close:[7,20,24],cloud:[1,3,15,20,23],cloud_credenti:16,code:[0,16,22,24],code_bad_password_format:16,code_disabled_or_deleted_account:16,code_generic_error:16,code_invalid_email:16,code_missing_password:16,code_no_error:16,code_token_error:16,code_token_expir:16,code_token_invalid:16,code_too_many_token:16,code_unexisting_account:16,code_wrong_credenti:16,code_wrong_email:16,collect:0,color:[9,24],color_temperatur:9,com:[16,22],combin:[6,16],command:[0,7,9,18,20,21,22,24],common:[21,23],commun:23,complet:[20,24],compli:0,compos:[1,3],concaten:23,config:23,configur:[9,14,20,23,24],connect:[20,23,24],consent:23,conserv:20,consid:[18,21,24],constant:23,consumpt:[5,6,24],consumptionxmixin:[17,21,24],contact:20,contain:[9,16,18,24],content:23,continu:0,contrari:24,control:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,18,21],conveni:[0,20],copi:23,core:24,coro:[1,18],coro_nam:0,coroutin:[0,1,18],correctli:23,could:[20,21],creat:[0,18,24],cred:16,credenti:[0,15,16,23],creds_env_var_nam:16,current:[0,1,3,6,7,9,14,15,20,24],current_color:24,danger:24,data:[1,3,5,6,13,16,21,24],datetim:[13,14,15,19],deal:[16,18,24],deamon:0,debug:0,decid:0,dedic:0,def:[0,24],defin:1,definit:0,degre:[13,14],delai:[0,18,19],delet:16,deliv:[1,20],demo:24,deriv:[18,24],describ:6,design:0,destination_device_uuid:18,detail:24,dev:24,develop:[0,1,20,21,23,24],devic:[1,2,3,4,5,6,9,12,13,14,16,18,19,20,21],device_class:[18,24],device_internal_id:[0,1],device_max_command_queu:0,device_nam:[18,24],device_stat:19,device_typ:[18,24],device_uuid:[1,4,5,6,7,8,9,10,11,12,18,19,23,24],deviceuuid:23,devid:0,dhcp:23,dict:[0,1,5,18],did:21,differ:[20,23,24],digest:23,digit:23,directori:0,dirti:24,disabl:16,disconnect:20,discov:[0,18,20,24],discoveri:18,discrimin:23,document:[20,24],doe:[0,16,20,21,23,24],doing:24,domest:23,domot:21,done:[0,16],door:[7,21],down:24,download:22,drop:[0,18,19],drop_on_overquota:[1,3,5,6,9,12,14,18],due:1,each:[0,9,20],easi:0,edg:20,effort:24,either:24,electr:[6,24],electricitymixin:[17,21,24],els:[20,24],email:[0,16,20,24],embed:[1,3],empti:24,enabl:9,end:20,endpoint:[16,20,24],engin:23,enough:[6,23],ensur:24,enter:0,entir:24,enumer:20,env:16,environ:24,equip:24,error:[16,20],errorcod:16,even:[0,21,23,24],event:[0,1,18,20,23],everi:[20,23],evt_coro:0,exact:[0,24],exampl:[0,24],exce:0,exchang:0,execut:[0,18,23],exist:16,expect:23,experienc:20,expir:16,explain:20,explicit:23,explicitli:[18,21,23],exponenti:0,expos:[0,1,13,18,24],fact:[21,24],failur:0,fals:[1,2,3,5,6,7,9,12,14,18],fast:24,featur:[0,18,21],fetch:[18,20],field:[18,24],file:0,filter:[18,23,24],find:24,find_devic:[18,24],firmwar:[1,23],firmware_vers:1,first:[0,20,21,23,24],flaw:23,flood:6,flow:21,fmware:23,folder:0,follow:[0,22,23,24],forbidden:23,forc:[1,3,13,24],form:23,format:16,forward:24,found:24,framework:21,frequent:24,from:[0,5,6,9,15,18,20,22,23,24],from_json:15,full:[1,3,13,16,18],further:21,futur:0,garag:[7,21],garageopenermixin:[17,21,24],gatewai:23,gather:[0,6],gener:[0,1,9,16,18,23,24],genericpushnotif:18,genericsubdevic:[17,21],get:[1,3,9,18,24],get_api_stat:19,get_color_temperatur:9,get_delayed_api_stat:19,get_dropped_api_stat:19,get_event_loop:24,get_is_open:[7,24],get_last_sampl:6,get_light_is_on:9,get_lumin:9,get_preset_temperatur:14,get_rgb_color:[9,24],get_supported_preset:14,get_supports_lumin:9,get_supports_rgb:[9,24],get_supports_temperatur:9,getlogg:0,git:22,github:[0,22],given:[0,7,9,14,15,16],global:0,global_burst_r:0,global_stat:19,global_time_window:0,goe:24,going:21,gotcha:[21,24],grade:13,green:9,guarante:23,hand:24,handl:[19,20,21,24],handler:[0,1,18],happen:[0,20,23],hard:21,hardwar:[1,21,23],hardware_vers:1,has:[0,13,14,16,19,20,23,24],have:[0,1,9,16,18,21,22,23,24],header:23,heat:24,helper:[0,19],here:24,hex:23,him:20,histor:5,hit:[0,18,20],hoc:0,hold:[15,19,23],host:23,hostnam:[18,23],hour:[20,23],how:[0,20,21,24],howev:[0,20,23,24],http:[17,18,21,22,23,24],http_api:[0,16,18,24],http_api_cli:24,http_client:[0,18,24],http_proxi:16,httpdeviceinfo:16,httpsubdeviceinfo:16,hub:[3,8,16,18,24],hub_id:16,hubdevic:[17,18,21,24],hubdevice_uuid:[3,13,14],hubmixn:[17,21],hubmts100mixin:[17,21],humid:[13,24],identifi:[1,3,18,23,24],ids:[18,24],ignor:9,imag:23,immedi:24,immin:20,implement:[0,12,18,20,24],inconsist:20,index:[1,2,12,21],indic:16,info:[0,6,9,14,24],inform:[0,1,6,23,24],initi:18,input:[0,23],inspect:21,instal:21,instanc:[0,15,16,20],instant:6,instant_consumpt:24,instead:[6,14,16,19,24],instruct:23,integ:9,intens:9,intercept:0,interest:[0,12],interfac:24,intern:[1,3,19],internal_id:[1,3,18,24],internet:20,interv:18,introduc:[20,21],invalid:16,invok:[0,1,3,16,18,20,24],iot:[16,22],is_heat:24,is_master_channel:2,is_on:[12,24],isoformat:24,issu:[0,16,22,24],issued_on:15,itemsview:19,iter:[14,18,24],its:[0,3,18,23],itself:[19,23],json:[15,23],json_str:15,keep:[0,16,19,20,24],kei:[15,23],keyword:20,kind:23,know:[21,24],known:[13,14,18],kwarg:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,16],kword:18,last_sampled_humid:[13,24],last_sampled_temperatur:[13,14,24],last_sampled_tim:[13,14,24],latest:[0,13,14,22,24],lead:21,least:9,len:24,let:[21,24],level:0,leverag:21,librari:[0,1,3,20,22,23,24],light:[9,18,24],lightmixin:[17,18,21,24],like:[0,24],limit:[1,3,18,20,21],line:20,list:[1,5,16,18,21],listen:[0,20],liter:23,local:[18,23],log:[16,20,21,23],logic:[18,24],login:[16,23],logout:[16,20,24],longer:0,look:[0,1,21,24],lookup_channel:1,loop:[18,20,24],looper:18,loos:20,lost:20,low:0,lower:23,lowercas:23,lumin:[9,24],mac:23,macaddress:23,machin:20,magnet:24,mai:[0,6,20,23],main:24,make:[0,16,20,22,23],malici:23,manag:[1,3,4,5,6,7,8,9,10,11,12,13,14,18,19,20,21,24],mani:[16,20,23],manual:[22,24],map:13,mark:24,market:0,master:1,match:[0,18,23,24],matter:0,max:24,max_sampl:19,max_supported_temperatur:[13,24],maximum:[13,18],md5:23,meant:21,measur:6,meross:[0,1,3,15,16,18,20,21,22,24],meross_:23,meross_cli:0,meross_devic:24,meross_device_uuid:18,meross_email:24,meross_iot:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,24],meross_password:24,meross_root_logg:0,meross_sniff:0,merosscloudcr:[15,16],merosscloudcredenti:[16,17,21],merosshttpcli:[0,16,18,20,24],merossiot:[0,18,22,24],merossmanag:[0,17,20,21,24],merosssnif:0,messag:[0,19,20,23],message_id:23,messageid:23,method:[0,1,3,6,14,16,18,19,20,23,24],metric:[6,18],might:[1,16,20,21,24],min:24,min_supported_temperatur:[13,24],mind:21,minimum:13,minut:0,miss:16,mixin:[5,6,7,8,9,10,11,12,18,24],mode:[9,23,24],model:[1,3,6,15,16,18,24],modifi:0,modul:[0,21],moment:[0,20],monitor:24,more:[0,16,18,23,24],moreov:13,most:[0,1,3,20,21,23,24],motor:24,mount:24,mqtt:[1,3,18,19,20,21,24],mqtt_call_stat:[0,18],mqtt_host:23,mqtt_hostnam:18,mqtt_port:[18,23],mqtt_skip_cert_valid:18,ms100:[13,24],ms100sensor:[17,18,21,24],msl120:[9,18,24],mss210:23,mss310:[18,24],mts100v3:24,mts100v3valv:[17,18,21,24],multi:1,multipl:[18,24],must:[0,1,9,18,20,23],name:[0,1,2,18,23,24],namespac:[0,1,18,19,23],nativ:[16,18,24],need:[0,1,3,7,20,24],neighborhood:23,network:[0,1,3,21,23],new_temp:24,none:[1,2,3,6,7,9,12,14,16,18,19,24],note:[6,9,18,21,23,24],notic:20,notif:[1,3,18,20,21],notifi:18,notificaiton:0,notify_api_cal:19,notify_delayed_cal:19,notify_dropped_cal:19,now:[21,23],number:[0,14,19,20,24],numer:23,object:[0,1,6,15,16,18,20],obtain:[16,23],occur:[0,20],off:[9,12,24],offer:[6,13,24],offici:21,offlin:18,often:6,ofter:14,omissi:0,omit:23,on_off:24,onc:[0,23,24],one:[0,9,18,23,24],ones:[0,20,24],onli:[1,3,9,18,22,23,24],onlin:[0,1,3,18,24],online_statu:[1,3,18,24],onlinestatu:[18,24],onoff:9,open:[7,21,23],open_statu:24,oper:[1,7,9,12,24],operations__:9,opt_param:0,option:[2,6,7,9,12,14,16,18,19,24],order:[0,14,18,20,23,24],origin:0,other:[1,20,23,24],otherwis:[7,9],out:0,outcom:23,over:0,overquota:18,overrid:0,own:24,page:21,pair:21,panoram:24,param:[1,15,16,18],paramet:[0,1,3,5,6,7,9,12,14,16,18,23,24],parti:21,particular:18,pass:0,password:[0,16,23,24],path:23,pattern:[20,21],payload:[18,23],peopl:21,per:0,perform:[0,16,18,20,21,23],phase:23,physic:23,piec:21,pip:22,pipi:22,place:21,plai:[0,24],plan:21,pleas:[0,6,9,21],plu:[1,3],plug:[23,24],plug_ip_address:23,plugin:[3,6,21],point:23,polici:0,poll:[3,6,14],port:[18,23],portion:23,possibl:[0,16,23],post:23,power:[5,6,24],powerinfo:6,preced:20,prefix:[1,3,23],preset:14,press:[0,23,24],pretti:0,prevent:[0,20],previous:[1,6,15,18,20],print:24,proactoreventloop:20,probabl:21,product:21,program:[0,1,3,21],proper:24,properli:20,properti:[0,1,3,13,14,16,18,19,24],protocol:21,provid:[16,18,21,23,24],proxi:16,proxim:24,publish:23,pull:23,push:[1,3,18,20,21],put:23,python:[0,20,21,22],queri:24,quick:21,quickli:24,quit:24,rais:0,randint:24,random:24,randomli:24,rate:[18,20,21],rate_limit:[0,18],ratelimitcheck:[0,18],rather:[6,24],reach:[0,20],react:[0,1],read:[5,6,21],readonli:24,realli:24,reason:[0,20,21,24],reboot:23,receiv:[0,1,3,18,20,23],recent:[6,24],recipi:24,recogn:23,record:19,red:9,refer:[0,6,21,24],refresh:[6,13],refus:16,regist:[0,1,5,16,18,19,24],register_push_notification_handler_coroutin:[0,1,18],registri:18,rel:[18,24],relat:20,releas:[0,20],reli:[0,6,14,21,24],remov:[0,20],report:[0,13,14,18,23,24],repres:23,represent:1,republish:23,request:[16,20,23],requir:22,reschedul:0,respect:24,respons:[0,16,23,24],restor:20,restrict:18,result:[18,19,20,24],resum:23,retri:0,retriev:[0,14,18,23,24],revers:23,revis:1,rgb:[9,24],right:21,risk:24,room:14,rout:23,run:[0,1,3,20],run_until_complet:24,runtimeerror:20,safe:24,same:16,sampl:[13,14,24],sample_timestamp:6,satisfi:[18,24],scan:23,script:[0,20,24],search:[21,24],second:[0,18,19,23],secret:23,section:[20,23,24],secur:[20,23],see:24,seem:23,select:0,send:[0,7,18,20,23,24],sens:[6,13,24],sensit:[0,18,24],sensor:[13,14,18,21],sent:[0,18,19,23],separ:23,sequenc:23,serial:15,seriou:23,serv:23,server:23,session:16,set:[0,14,16,18,23,24],set_event_loop_polici:[20,24],setlevel:0,settabl:13,setup:[20,24],sever:0,shoul:18,should:[0,1,6,14,16,18,20,21,23,24],show:24,shown:0,sign:23,signal:24,signatur:[0,1,23,24],similarli:0,simpl:23,simpli:[0,23],simplifi:16,simul:24,sinc:23,singl:19,situat:20,size:0,skip_rate_limit:[1,3,5,6,9,12,14],skip_rate_limiting_check:18,sleep:24,smart:[0,12,24],snif:[0,23],sniff:21,sniffer:0,snippet:[0,24],solv:20,some:[0,1,3,18,20,21,24],somehow:24,someon:[20,24],someth:0,soon:[18,21,24],sourc:22,specif:[0,1,16,19,23,24],specifi:[9,12,16,18,24],spoof:23,sprai:10,spraymixin:[17,21],ssid:23,ssl:23,standard:0,start:[0,18,20,21,23],stat:[12,19],state:[1,9,12,20,23,24],statist:[17,21],stats_by_uuid:19,statu:[0,1,3,7,12,16,18,20,24],step:23,stick:0,still:23,stop:0,store:16,str1:23,str2:23,str:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,24],straight:24,strategi:0,strictli:[1,3],string:[14,15,18,23,24],strongli:0,stuff:21,sub:16,subdevic:[13,14,16,18,24],subdevice_id:[3,13,14],subscrib:23,succe:23,success:23,suffix:[1,3],suitabl:21,support:[0,9,12,13,14,18,24],sure:[0,16,20,22],suspend:20,suspens:20,system:11,systemallmixin:[17,21],systemonlinemixin:[17,21],take:[0,21],taken:24,target:[19,24],target_temperatur:24,task:21,team:20,tell:[9,18,23,24],temp:24,temperatur:[9,13,14,24],test:0,than:[6,24],thei:[0,24],them:[0,24],themselv:24,thermostat:21,thi:[0,1,3,5,6,9,12,13,14,16,18,19,20,22,23,24],thing:[21,24],those:[18,24],though:0,three:9,time:[13,14,16,18,20,21,23,24],time_window:[0,19],timedelta:[0,19],timeout:18,timestamp:[19,23],timewindow:0,to_json:15,todo:0,toggl:[9,12,18,24],togglemixin:[17,21,24],togglex:[9,12,18,24],togglexmixin:[17,18,21,24],togglexmixn:24,token:[0,15,16,20],too:[16,20,21,24],tool:0,top:20,topic:[21,23],total:19,total_cal:19,track:[0,19,24],traffic:[21,23],treat:23,tri:23,trigger:[13,24],tropic:23,tune:0,tupl:9,ture:24,turn:[9,12,24],two:[0,23],txt:22,type:[1,18,23,24],unavail:1,uncom:24,underscor:23,understand:21,unfortun:24,union:[1,15],uniqu:23,unknown:[1,16,18,23],unoffici:21,unregist:[0,1,18],unregister_push_notification_handler_coroutin:[0,1,18],unsupport:21,until:0,untrust:23,unzip:22,updat:[1,3,13,14,18,20,23,24],update_subdevice_statu:18,upgrad:22,upload:0,upon:[1,3],url:16,usag:16,use:[0,14,16,20,21,23,24],used:[0,1,3,9,16,20,21,23,24],useful:0,user:[0,1,15,16,18,20,23,24],user_email:15,user_id:[15,23],userid:23,usernam:[16,23],uses:23,using:[0,16,20,23],usual:[9,20],utc:[13,14],util:[0,15,16,18,19],uuid:[1,16,18,19,23,24],valid:23,valu:[0,6,9,13,14,23,24],valv:[18,24],vari:9,variabl:16,verbos:0,veri:24,version:[0,1,20],via:[0,9,18,23,24],voltag:[6,24],wai:[0,20,21],wait:[0,18,24],want:[0,13,18,21,22],warn:[0,20],warranti:21,well:[21,24],when:[0,1,3,9,12,13,14,16,18,19,20,24],whenev:[1,18,19],where:[0,6,9,23],which:[0,7,16,18,20,21,23,24],whole:[18,24],why:24,wifi:23,window:20,windowsselectoreventlooppolici:[20,24],within:24,without:[16,20,23],won:23,word:23,work:[20,21,22,24],would:[18,24],write:[20,23,24],wrong:[16,20],yet:0,you:[0,1,3,6,13,14,16,18,20,21,22,24],your:[0,1,3,20,24],your_meross_cloud_email:24,your_meross_cloud_password:24,zip:0},titles:["Advanced topics","BaseDevice","ChannelInfo","GenericSubDevice","HubDevice","ConsumptionXMixin","ElectricityMixin","GarageOpenerMixin","HubMixn","LightMixin","SprayMixin","SystemAllMixin","ToggleXMixin","Ms100Sensor","Mts100v3Valve","MerossCloudCredentials","HTTP Client","API Reference","MerossManager","Statistics","Common gotchas","Welcome to MerossIot Library\u2019s documentation!","Installation","Meross Protocol Inspection","Quick start"],titleterms:{"switch":24,advanc:0,api:17,app:23,architectur:23,basedevic:1,befor:21,bulb:24,call:0,channelinfo:2,client:[16,23],command:23,common:20,consumptionxmixin:5,content:21,control:24,data:0,devic:[0,23,24],document:21,door:24,electricitymixin:6,flow:23,garag:24,garageopenermixin:7,genericsubdevic:3,gotcha:20,handl:0,http:16,hubdevic:4,hubmixn:8,hubmts100mixin:8,indic:21,inspect:23,instal:22,librari:21,lightmixin:9,limit:0,list:24,log:0,manag:0,meross:23,merosscloudcredenti:15,merossiot:21,merossmanag:18,mqtt:[0,23],ms100sensor:13,mts100v3valv:14,notif:[0,23],open:24,pair:23,protocol:23,push:[0,23],quick:24,rate:0,read:24,refer:17,sensor:24,sniff:0,spraymixin:10,start:24,statist:[0,19],systemallmixin:11,systemonlinemixin:11,tabl:21,thermostat:24,thi:21,togglemixin:12,togglexmixin:12,topic:0,using:21,welcom:21}})