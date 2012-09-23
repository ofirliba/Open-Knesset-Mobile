Ext.regController('ProtocolSection', {

	Index: function(options)
    {
	console.log('Ok11');
        if ( ! this.protocolSectionView)
        {
            this.protocolsectionView = this.render({
                xtype: 'ProtocolSectionView',
            });
/*
            this.partyListView.addListener('itemtap',
            	function(that, index, item, e) {
					var record = that.store.getAt(index);
					OKnesset.app.controllers.navigation.dispatchPanel('Party/Index/' + record.data.id, options.historyUrl);
				});
*/
        }
        console.log('Ok22');
        this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.protocolsec);
        this.application.viewport.setActiveItem(this.protocolsectionView, options.animation);
    },


	refresh : function() {
		this.protocolsectionView.refresh();
	}
});