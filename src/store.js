import { createStore } from 'vuex';

const store = createStore({
    state: {
        fieldMapping: {} // Inicializamos vacío
    },
    mutations: {
        setFieldMapping(state, payload) {
            state.fieldMapping = payload;
        }
    },
    actions: {
        loadFieldMapping({ commit }) {
            const fieldMapping = {
                "id": "ID",
                "title": "Title",
                "creator_user_id": "Creator",
                "user_id": "Owner",
                "weighted_value": "Weighted value",
                "weighted_value_currency": "Currency of Weighted value",
                "pipeline": "Pipeline",
                "stage_id": "Stage",
                "status": "Status",
                "add_time": "Deal created",
                "update_time": "Update time",
                "stage_change_time": "Last stage change",
                "next_activity_date": "Next activity date",
                "last_activity_date": "Last activity date",
                "won_time": "Won time",
                "last_incoming_mail_time": "Last email received",
                "last_outgoing_mail_time": "Last email sent",
                "lost_time": "Lost time",
                "close_time": "Deal closed on",
                "lost_reason": "Lost reason",
                "visible_to": "Visible to",
                "activities_count": "Total activities",
                "done_activities_count": "Done activities",
                "undone_activities_count": "Activities to do",
                "email_messages_count": "Email messages count",
                "product_quantity": "Product quantity",
                "product_amount": "Product amount",
                "product_name": "Product name",
                "origin": "Source origin",
                "origin_id": "Source origin ID",
                "channel": "Source channel",
                "channel_id": "Source channel ID",
                "mrr": "MRR",
                "mrr_currency": "Currency of MRR",
                "arr": "ARR",
                "arr_currency": "Currency of ARR",
                "acv": "ACV",
                "acv_currency": "Currency of ACV",
                "value": "Value",
                "currency": "Currency",
                "probability": "Probability",
                "org_id": "Organization",
                "person_id": "Contact person",
                "label": "Label",
                "expected_close_date": "Expected close date",
                "4077ea249c2474ae09ba55ff82df5a71534ff025": "Email",
                "c79b2d33c00cb3993e11c383caa5f060f04feabd": "Phone",
                "4cd1b4a66de2f526395ba5302351f5c8f9f978fe": "Language",
                "21ec7adff26b8263aa5cff796e1f0a8969e05b5f": "Information Reviewed",
                "b38d15fe76c6527d206d9939361af1815029f78e": "Documents Reviewed",
                "9df76fe779b5a8a48eb41859bf4afe7b83ec8d88": "Payment Completed",
                "758af6189e1c56cddfcc1399c313d06c7cea82bb": "Communications",
                "ddb6656c58ac42628cc8ff3a66229c2b066e5532": "Expected Start Date",
                "9c76ce8681c602b24566065962a3b11f11225f07": "Document Submitted",
                "4b2a327135377aec0aaac4d9778f73a0c95576da": "Program",
                "85eda101036fdc3de1e1c7634768829508314c00": "Documents",
                "f96194b9a53e2721df1f30f0b8a3c144bf04dabf": "Country",
                "db198da6c71d28529b717ce239ff49e277512b65": "State",
                "b1111b880971709af04235f2ae1d969cf1fb63a4": "City",
                "c8e385eccdfd6371b0bf400f3da33f1026aef883": "Address",
                "9ccc8a7da481c2a115e3abcc860fa60be79c0675": "Date of Birth",
                "b5e49d280e46859edbd918b8f34151d5eb817308": "Notes",
                "5a5e5fc3c0dc230b76b576e2f48ec18196408840": "Chat conversion URL",
                "87dfe63d51c4bf39ae3fce9970d5c47ee81e71a5": "Token",
                "84eb20fb4dc2afa6ac4d2d185645a3ed51598bcd": "Linked web visitor",
                "86119c5fb21d89195b9f3afce7f8b50841a497e1": "Latest web visit"
            };

            commit('setFieldMapping', fieldMapping);
        }
    },
    getters: {
        getFieldMapping: (state) => state.fieldMapping
    }
});

export default store;