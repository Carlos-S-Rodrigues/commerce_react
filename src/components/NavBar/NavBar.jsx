import React from 'react'
import { Search} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import { Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItem } from './NavBar.elements'

function NavBar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search/>
          </SearchContainer>
        </Left>
        <Center><Logo>GRANPRIMUS</Logo></Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
          <MenuItem>Register </MenuItem>
          <MenuItem>Sign in </MenuItem>

        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar