/**
 * The Protocol section  - displays the spokeman and the text
 * Protocol
 */

OKnesset.app.views.ProtocolSectionView = new Ext.extend(Ext.Panel, {
    id: 'ProtocolSectionView',
   
	initComponent: function()
    {
		
		this.image = new OKnesset.app.views.ProtocolSectionView.SpokemanImage();
		this.protocolsectionText=  new OKnesset.app.views.ProtocolSectionView.Text();
		this.protocolsectionBar= new OKnesset.app.views.ProtocolSectionView.Bar();
		
		this.items = [this.protocolsectionText,this.protocolsectionBar];
		this.dockedItems = 
				[{
					xtype: 'toolbar',
					dock: 'top',
					height: '75px',
					maxHeight:'100px',
					padding: '5' ,
					items: [
					        	this.image
							,{
					        		xtype: 'spacer'
							}, {
								ui: 'plain',
								id: 'spokeman',
								iconMask: true,
								text:'<font size="7"> spokeman</font>'
		         			}]
				 }];

		
		 OKnesset.app.views.ProtocolSectionView.superclass.initComponent.apply(this, arguments);
    }
});


Ext.reg('ProtocolSectionView', OKnesset.app.views.ProtocolSectionView);


OKnesset.app.views.ProtocolSectionView.Text = new Ext.extend(Ext.List, {
	id : 'Text',
	layout: ' fit',
	itemTpl : '<div>{text}</div>',
	store : OKnesset.ProtocolStore,
	
});

OKnesset.app.views.ProtocolSectionView.Bar = new Ext.extend(Ext.Toolbar,{
	dock: 'bottom',
	items: [{
	    	 	ui: 'plain',
	    	 	id: 'next spokeman',
	    	 	iconMask: true,
	    	 	text: 'next spokeman',
	}, {
		xtype: 'spacer' 
	},{
         		ui: 'plain',
         		id: 'pre spokeman',
         		iconMask: true,
         		text: 'pre spokeman',
     	}],
});

OKnesset.app.views.ProtocolSectionView.SpokemanImage = new Ext.extend(Ext.Panel, {
    id: 'SpokemanImage',
    height : "5em",
	//html:'שם הדובר',
    //tpl: '<img src="http://www.knesset.gov.il/mk/images/members/livnee_zipi-s.jpg" height="100%"></img>'
    html: '<img src="http://www.knesset.gov.il/mk/images/members/livnee_zipi-s.jpg" height="100%"></img>'
});



