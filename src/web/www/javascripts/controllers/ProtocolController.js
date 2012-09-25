Ext.regController('Protocol', {

    // index action
	//console.log('Ok1');
    Index: function(options)
    {
        if (!this.protocolView)
        {
            this.protocolView = this.render({
                xtype: 'ProtocolView',
            });
            
            //when tap on committee member
            var protocolController = this.protocolView.query('#ProtocolMembers')[0];
            protocolController.addListener('itemtap',
                	function(that, index, item, e) {
    					var record = that.store.getAt(index);
    					OKnesset.app.controllers.navigation.dispatchPanel('Member/Index/' + record.data.id, options.historyUrl);
            });
            //when tap on the spokeman and text
            var spokemantap = this.protocolView.query('#ProtocolText')[0];
            spokemantap.addListener('itemtap',
                	function(that, index, item, e) {
    					var record = that.store.getAt(index);
    					OKnesset.app.controllers.navigation.dispatchPanel('ProtocolSection/Index/', options.historyUrl);
            });
            console.log('Ok2');
            
            Ext.util.JSONP.request({
    		    url: 'http://www.oknesset.org/api/committeemeeting/6720/',
    		    callbackKey : "callback",
    		    onFailure : function(){console.log("failure");},
    			callback : function(data){
    		     // creating ProtocolStore
    		     var tmpArray = [];
            	 tmpArray.push(data);
            	// console.log(data);
                 OKnesset.Protocol2Store.loadData(tmpArray);
                 // creating ProtocolMembersStore
            	 OKnesset.ProtocolMembersStore.loadData(data.mks_attended);
            	// creating ProtocolTextStore
            	 var protocolArray = [];
        	     var protocolArray= data.protocol_text.split(/[<>]/);
            	 var protocolText =[];
            	 protocolArray.forEach(function(e){
            		 protocolText.push({protocol_text: e});
            	 });
            	 console.log(protocolText);
            	 OKnesset.ProtocolTopicsStore.loadData(protocolText);
         
    		    },
    		});
           
        }
	
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.Committeemeeting);
        this.application.viewport.setActiveItem(this.protocolView, options.animation);
        
        if (options.pushed){
        	if (spokemantap.scroller) {
        		spokemantap.scroller.scrollTo({
        			x: 0,
        			y: 0
        		});
        	}
        	if (protocolController.scroller) {
        		protocolController.scroller.scrollTo({
        			x: 0,
        			y: 0
        		});
        	}
        }
        
        console.log('Ok4');
    
	},
	
    refresh : function() {
		
		this.protocolView.refresh();
	}
});
/*
var PROTOCOL_TYPE_TITLE = 0;
var PROTOCOL_TYPE_MEMBER = 1;
var PROTOCOL_TYPE_TEXT = 2;

convertData = function(data){
	var result = new Array();
	result.push({
		title:"dddd",
		test:"",
		type: PROTOCOL_TYPE_TITLE 
	});
	result.push({
		title:"",
		test:"sdsdsdssdsd",
		type: PROTOCOL_TYPE_TEXT
	});
	
	
	
	for (item in data.mks_attended){
		result.push({
			title:item.name,
			test:"sdsdsdssdsd",
			type: PROTOCOL_TYPE_TEXT,
			id: getMemberIDFromURL(item.url)
		});
		
	}
	
	
	
}*/