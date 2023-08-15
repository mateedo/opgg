import React from "react"
import "./Header.css"


let base_icon_link = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/"

export default function Header(props) {
    const [account, updateAccount] = React.useState({
        username: "mateo",
        icon_id: 0,
        region: "na1"
    })

    const [display, updateDisplay] = React.useState({
        username: "",
        icon_id: 0
    })

    const [temp, updatetTemp] = React.useState(0)

    function handleSearchChange(event) {
        const {name, value} = event.target
        updateAccount(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    console.log(account)

    function handleSubmit(event) {
        event.preventDefault()
        console.log("submitted")
        updatetTemp(prev => prev + 1)
    }


    React.useEffect( () => {
            fetch("https://" + account.region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + account.username + "?api_key=" + props.api_key)
            .then(res => res.json())
            .then(data => updateDisplay({
                username: data.name,
                icon_id: data.profileIconId
            }))

            updateAccount(prev => ({
                ...prev,
                username: "",
                icon_id: 0
            }))
    }, [temp])

    // fetch("https://" + account.region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + account.username + "?api_key=" + props.api_key)
    //     .then(res => res.json())
    //     .then(data => updateAccount( {
    //         username: data.name,
    //         icon_id: data.profileIconId,
    //     }))

    //https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Mateo?api_key=RGAPI-4469b964-7b92-46c3-8c95-4d84d2c1ee9f


    return (
        <div className="header">
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <select
                  id="region"
                  name="region"
                  onChange={handleSearchChange}
                  className="header--region--selector"
                >
                  <option value="">Region</option>
                  <option value="na1">NA</option>
                  <option value="euw1">EUW</option>
                  <option value="eun1">EUNE</option>
                </select>
                <input
                  type="text"
                  placeholder="Summoner Name"
                  onChange={handleSearchChange}
                  name="username"
                  value={account.username}
                  className="header--username--selector"
                />
                <button type="submit" className="header--submit">Search</button>
              </div>
            </form>
          </div>
      
          <div className="header--user--section">
            <img className="header--user--icon" src={base_icon_link + display.icon_id + ".jpg"} alt={"icon_id=" + display.icon_id} />
            <h1 className="header--user--name"> {display.username}</h1>
          </div>
        </div>
      )
      

}