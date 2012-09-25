/**
 * The Protocol panel  - displays info on a specific
 * Protocol
 */

OKnesset.app.views.ProtocolView = new Ext.extend(Ext.Panel, {
    //id: 'ProtocolView',
   // layout: ' fit',
	scroll: 'vertical',
	
	initComponent: function()
    {
		this.protocolTitle = new OKnesset.app.views.ProtocolView.Title();
		this.protocolMembers = new OKnesset.app.views.ProtocolView.Members();
		this.protocolText = new OKnesset.app.views.ProtocolView.Text();
		//this.fullscreen=true;
		
		this.items = [
		              
		              new Ext.Panel({
		          		height : "2em",
		          		padding: '5',
		            	html: '<div align="right"><b> כותרת הישיבה </b></div>'
		            
		              }),
		              this.protocolTitle,
		              
		              new Ext.Panel({
		            	  height : "2em",
		            	  padding: '5',
		            	  html:'<div align="right"><b>  חברי  הכנסת שנכחו בישיבה </b></div>'
		              }),
		              
		              this.protocolMembers,
		              
		              new Ext.Panel({
		            	  height : "2em",
		            	  padding: '5',
		            	  html:'<div align="right"><b> תוכן הישיבה  </b></div>'
		              }),
		              
		              this.protocolText,
		              
		      ];
		 OKnesset.app.views.ProtocolView.superclass.initComponent.apply(this, arguments);
    }
});


Ext.reg('ProtocolView', OKnesset.app.views.ProtocolView);

OKnesset.app.views.ProtocolView.Title = new Ext.extend(Ext.List, {
	id : 'ProtocolTitle',
	layout: ' fit',
	padding: '5',
     scroll: false,
    //maxHeight: '50px',
    
    //itemTpl : '<div>{title}</div>',
    //store : OKnesset.ProtocolStore,
    itemTpl :'<div class="ProtocolTopics">{topics}</div>',	
	store : OKnesset.Protocol2Store,
	
});

OKnesset.app.views.ProtocolView.Members = new Ext.extend(Ext.List, {
	id : 'ProtocolMembers',
	layout: ' fit',
	padding: '5',
	scroll: false,
    maxHeight: '50px',
	//itemTpl : '<div>{members}</div>',
	//store : OKnesset.ProtocolStore
  
    //itemTpl : '<tpl for="mks_attended[0]"><p>{name}</p> </tpl>',
    itemTpl : '<div>{name}</div>',
	store : OKnesset.ProtocolMembersStore,
	onItemDisclosure : true
});
OKnesset.app.views.ProtocolView.Text = new Ext.extend(Ext.List, {
	id : 'ProtocolText',
	layout: ' fit',
	padding: '5',
    scroll: false,
    //maxHeight: '50px',
	//itemTpl : '<div>{protocol_text}</div>',
	//store : OKnesset.Protocol2Store,
   
    //itemTpl : '<div>{#}{text1}</div>',
   

    itemTpl: '<div><i>{#} {protocol_text} </i></div>',
  	store : OKnesset.ProtocolTopicsStore,
	onItemDisclosure : true
});


