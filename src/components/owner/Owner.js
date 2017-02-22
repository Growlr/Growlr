import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux';
import OwnerCard from './OwnerCard'
import { View, ScrollView, Text, Dimensions, ListView } from 'react-native'

class Owner extends Component {




    render(){
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1.id !== r2.id
        });

        const items = this.props.cards


        return (

            <ListView
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}
                dataSource={dataSource.cloneWithRows(items)}
                renderRow={(rowData) => <OwnerCard pet_id={rowData.uniq_id} name={rowData.pet_name} age={rowData.age} breed={rowData.breed} imgurl={rowData.img_link}/>}
            />

        )
    }
}

mapStateToProps = (state) => {
    return {
        cards: state.mainPage.cards
        , user: state.login.user
    }
}

const mapDispatchToActionCreators = {

}
export default connect(mapStateToProps, null)(Owner);