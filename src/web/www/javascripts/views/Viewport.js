OKnesset.app.views.Viewport = new Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    dockedItems: [{
        itemId: 'toolbar',
        xtype: 'toolbar',
        title: '',
        items: [{
            // The "i" at the top left of the application toolbar
            ui: 'plain',
            id: 'appInfo',
            iconMask: true,
            iconCls: 'info',
        }, {
            // The email icon at the top left of the application toolbar
            ui: 'plain',
            id: 'emailReview',
            iconMask: true,
            iconCls: 'mail',
        },{
        	//The "Comm" icon at the top left tool bar of the application
         	ui: 'action',
            id: 'allComm',
            iconMask: true,
          	text:"committees",
        },{
        	//protocol button
        	// delete this button after implement the protocol page.
         	ui: 'action',
            id: 'prot',
            iconMask: true,
          	text:"TEMPprotocol",
        }, {
            xtype: 'spacer'
        }, {
            id: 'backBtn',
			hidden : true,
            iconCls: 'right2',
            iconMask: true,
            ui: 'action',
        }, ],
    }, ],
});


