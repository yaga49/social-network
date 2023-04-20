import React from 'react';


import {addPostAC, setUserProfileAC, updateNewPostTextCreator} from "../../../redux/state";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {Profile} from "../Profile";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";




type MSTPType = {
    messagePost:any[]
    newPostText:string
    profile: string | null
}

type PathParamsType = {
    userId: any
}


export type ProfileContainerPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

export class ProfileContainers extends React.Component<PropsType, any>{

    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            console.log(response)
            this.props.setUserProfile(response.data)

        })
    }

    render() {
        return<>
            <Profile
                messagePost={this.props.messagePost}
                newPostText={this.props.newPostText}
                addPostAC={this.props.addPostAC}
                updateNewPostTextCreator={this.props.updateNewPostTextCreator}
                profile={this.props.profile}
            />
        </>

    }

}


const mapStateToProps = (state: AppStateType):MSTPType => {
  return{

      messagePost: state.profileReducer.messages,
      newPostText: state.profileReducer.newPostText,
      profile: state.profileReducer.profile
  }
}


type MDTPType = {
    addPostAC: (text: string) => void
    updateNewPostTextCreator: (text: string) => void
    setUserProfile: (profile: any)=>void
}
const mapDispatchToProps = (dispatch: Dispatch):MDTPType => {
  return{
      addPostAC: (text: string)=>{
          let action = addPostAC(text)
          dispatch(action)
      },
      updateNewPostTextCreator: (text: string)=>{
          let action = updateNewPostTextCreator(text)
          dispatch(action)
      },
      setUserProfile: (profile: any)=>{
          dispatch(setUserProfileAC(profile))
      }
  }
}


const WithUrlDataContainerComponent = withRouter(ProfileContainers)
export const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(WithUrlDataContainerComponent)