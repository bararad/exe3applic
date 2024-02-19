
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export default function Profile() {

  let userInSession = JSON.parse(sessionStorage.getItem('connectedUser'));
  console.log('usI', userInSession);

  let adress = userInSession.userStreet + " " + userInSession.userHomeNum + "," + userInSession.userCity
  let fullname = (userInSession.userFirstName + " " + userInSession.userLastName);
  const onUpdateClick = () => {

  }
  const onToGameClick = () => {
    <link href="" />

  }
  const onDisconnectClick = () => {

  }

  return (
    <Card>

      {<CardContent style={{ display: 'flex', alignItems: 'center', backgroundColor: 'beige' }}>
        <div>

          <Typography variant="h2" component="div">
            {fullname.toUpperCase()}

            <Avatar
              alt="User Avatar"
              src={userInSession.userImage}
              sx={{ width: 150, height: 150, marginRight: 5 }}
            />
          </Typography>
        </div>
        <div>
          <Typography color="text.secondary" gutterBottom>
            Email: {userInSession.userEmail}
          </Typography>
          <br />
          <Typography color="text.secondary" gutterBottom>
            Address: {adress}
          </Typography>
          <br />
          <Typography color="text.secondary" gutterBottom>
            Birth Date: {userInSession.userDofBirth}
          </Typography>
          <br />
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            '& button': { m: 1 }
          }}>
            <Button size='small' variant="contained"
              sx={{ backgroundColor: 'grey' }}
              onClick={onUpdateClick}>
              Update
            </Button>
            <Button size='small' variant="contained" onClick={onToGameClick}>
              To the Game
            </Button>
            <Button size='small' variant="contained"
              sx={{ backgroundColor: 'red' }}
              onClick={onDisconnectClick}>
              Disconnect
            </Button>
          </Box>
        </div>

      </CardContent>}
    </Card>
  )
}






