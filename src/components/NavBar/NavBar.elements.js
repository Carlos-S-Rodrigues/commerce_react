import styled from 'styled-components'

export const Container = styled.div`
  height: 50px;
`

export const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 20px;
`

export const Input = styled.input`
  border: none;
  outline: none;
`

export const Center = styled.div`
  flex: 1;
  text-align: center;
`
export const Logo = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #012350;
`

export const Right = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: flex-end;
`

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`
