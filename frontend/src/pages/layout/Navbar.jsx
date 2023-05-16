import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";

const NavbarContainer = styled(AppBar)({
  backgroundColor: "#2c444e",
});

const ToolbarContainer = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Logo = styled(Typography)({
  fontSize: "24px",
  fontWeight: 600,
  color: "#ffc801",
});

const NavLinksContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const NavLink = styled(Button)({
  fontSize: "16px",
  fontWeight: 500,
  color: "#ffffff",
  marginLeft: "1.5rem",
});

const UserContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const UserName = styled(Typography)({
  fontSize: "16px",
  fontWeight: 500,
  color: "#ffffff",
  marginRight: "1rem",
});

const UserAvatar = styled(Avatar)({
  width: "32px",
  height: "32px",
});

function Navbar({ user }) {
  const handleLogoutClick = () => {
        window.open(`http://localhost:8080/auth/logout`, "_self");
      };

  return (
    <NavbarContainer position="fixed">
      <ToolbarContainer>
        <Logo variant="h6">Logo</Logo>
        <NavLinksContainer>
          
          {user && (
            <UserContainer>
              <UserName>{user.name}</UserName>
              <UserAvatar src={user.picture} alt="User Avatar" />
              <Button color="inherit" onClick={handleLogoutClick}>
                Logout
              </Button>
            </UserContainer>
          )}
        </NavLinksContainer>
      </ToolbarContainer>
    </NavbarContainer>
  );
}

export default Navbar;
