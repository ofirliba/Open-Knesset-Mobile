
Ext.regModel('Protocol2', {
    fields: ['topics','protocol_text','committee','date', 'mks_attended']
});

OKnesset.Protocol2Store = new Ext.data.Store({
    model: 'Protocol2',
    
});

Ext.regModel('ProtocolMembers', {
    fields: ['name','url']
});

OKnesset.ProtocolMembersStore = new Ext.data.Store({
    model: 'ProtocolMembers',
    
});

Ext.regModel('ProtocolTopics', {
    fields: ['topics','protocol_text','committee','date', 'mks_attended']
});

OKnesset.ProtocolTopicsStore = new Ext.data.Store({
    model: 'ProtocolTopics',
    
});

OKnesset.ProtocolTopicsStoreEven = new Ext.data.Store({
    model: 'ProtocolTopics',
    
});

OKnesset.ProtocolTopicsStoreOdd = new Ext.data.Store({
    model: 'ProtocolTopics',
    
});



Ext.regModel('Party', {
    fields: ['name']
});

OKnesset.PartyStore = new Ext.data.Store({
    model: 'Party',
	sorters: [
		 	{
			property: 'members.length',
			direction: 'ASC'
			}
	],
    data: slimData
});


//add all committees control

Ext.regModel('AllCommittees', {
    fields: ['name']
});

OKnesset.AllCommitteesStore = new Ext.data.Store({
    model: 'AllCommittees'    
    //data: CommitteesData
});



Ext.regModel('Member', {
    fields: ['name']
});

OKnesset.MemberStore = new Ext.data.Store({
    model: 'Member',
	sorters : []
});

Ext.regModel('MemberBills', {
    fields: ['title']
});

OKnesset.MemberBillsStore = new Ext.data.Store({
    model: 'MemberBills',
	filters : {
    filterFn: function(item) {
    	    return parseInt(item.data.stage) >= 2;
 	   }
	},
    sorters: {
			property: 'stage',
			direction: 'DESC'
			},
	getGroupString : function(record) {
        return record.get('stage_text');
    }
});

Ext.regModel('MemberCommittees', {
    fields: ['title']
});

OKnesset.MemberCommitteesStore = new Ext.data.Store({
    model: 'MemberCommittees'
});
