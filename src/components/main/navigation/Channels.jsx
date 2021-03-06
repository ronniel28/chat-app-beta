import React,{useState} from 'react';
import ChannelListContainer from '../../table/ChannelListContainer';
import NewChannelModal from '../../tools/NewChannelModal';
import AddChannel from '../channels/AddChannel';

export default function Channels(props){

    const [searchResult, setSearchResult] = useState([])
    const [term, setTerm] =useState("")

    function getTerm(searchTerm){
        setTerm(searchTerm)
    }

    function searchHandler(searchTerm){
        if(searchTerm !== ""){
            const newChannelList = props.channelList.filter((channel) => {
                return (Object.values(channel).join(" ").toLowerCase().includes(searchTerm.toLowerCase()))
            })
            setSearchResult(newChannelList);
        } else {
            setSearchResult(props.channelList)
        }
    }

    return(
        <div>
        <p className='mb-5 text-5xl uppercase tracking-widest'> <span className="text-gray-200">Channels</span> <br /> here</p>
        <AddChannel headers = {props.headers} usersList={props.usersList}/>
        <br></br>
        {(props.channelList)?(<ChannelListContainer
        passReceiverDetails={props.passReceiverDetails}
        channelList={term.length < 1? props.channelList: searchResult}
        getTerm={getTerm}
        searchHandler ={searchHandler} 
        headers = {props.headers}
        usersList = {props.usersList}/>):<div>No Channels available</div>}
        </div>
    )
}