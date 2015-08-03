var Reflux = require('reflux');
var actions = require('./../actions');
var _ = require('lodash');

var store = function () {
    'use strict';

    // some variables and helpers for our fake database stuff
    var localStorageKey = "lugger-tabs";

    function getItemByKey(list, itemKey) {
        return _.find(list, function (item) {
            return item.key === itemKey;
        });
    }

    return Reflux.createStore({

        listenables: [actions],

        getActiveTab(fieldName){
            return _.result(_.find(this.tabs.tabList, 'isActive'), fieldName);
        },

        getNearestTab(tab_id){
            return _.first(this.tabs.tabList);
        },

        onSelectTab(tab_id) {
            this.tabs.tabList = this.tabs.tabList.map(function(tab){
                tab.isActive = tab.id == tab_id;
                return tab;
            });
            if(typeof this.getActiveTab('request') != 'undefined'){
                actions.updateRequest(this.getActiveTab('request'));
            }
            if(typeof this.getActiveTab('response') != 'undefined'){
                actions.updateResponse(this.getActiveTab('response'));
            }
            this.trigger(this.tabs);
        },

        onCreateTab(){
            let id = Math.floor((Math.random() * 999) + 1);
            this.tabs.tabList.push({
                id:id,
                label:"New tab",
                isActive:false,
                request:{
                    url: null,
                    method: "GET",
                    headers: [],
                    payload: null
                },
                response:{
                    responseCode: null,
                    headers: [],
                    payload: ''
                }
            });
            actions.selectTab(id);
            this.trigger(this.tabs);
        },

        onRemoveTab(tab_id){
            if(this.tabs.tabList.length > 1){
                let previousTab = this.getNearestTab(tab_id).id;

                this.tabs.tabList = this.tabs.tabList.filter(function(tab){
                    return tab.id != tab_id;
                });
                actions.selectTab(previousTab);
            }
        },

        onUpdateRequest(request){
            let activeTabId = this.getActiveTab('id');
            this.tabs.tabList = this.tabs.tabList.map(function(tab){
                if(tab.id == activeTabId){
                    tab.request = request;
                    tab.label = request.url ? request.url : "New tab";
                }
                return tab;
            });
            this.trigger(this.tabs);
        },

        onUpdateResponse(response){
            let activeTabId = this.getActiveTab('id');
            this.tabs.tabList = this.tabs.tabList.map(function(tab){
                if(tab.id == activeTabId){
                    tab.response = response;
                }
                return tab;
            });
        },

        getInitialState: function () {
            var loadedTabs = localStorage.getItem(localStorageKey);
            if (!loadedTabs) {
                this.tabs = {
                    requestResponse: [],
                    tabList: [
                        {
                            id: 1,
                            label: 'Lugger',
                            isActive: true,
                            request:{
                                url: null,
                                method: "GET",
                                headers: [],
                                payload: null
                            },
                            response:{
                                responseCode: null,
                                headers: [],
                                payload: ''
                            }
                        }
                    ]
                };
            }
            return this.tabs;
        }
    });
};

module.exports = store();
