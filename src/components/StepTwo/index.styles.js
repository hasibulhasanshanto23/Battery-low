import { styled } from '@mui/system';

export const ButtonDiv=styled('div')(({theme})=>({
  display:'flex',
  justifyContent:'flex-end',
  alignItems:'center',
  marginTop:'8px',
  gap:'8px'
}))

export const Upload=styled('div')(({theme})=>({
    display:'flex',
    flexDirection:'column',
    paddingTop:'12px',
    gap:'6px',
  }))

  export const Label=styled('div')(({theme})=>({
     fontSize:'14px',
     lineHeight:'10px',
     color:'#117FDF',
     marginBottom:'4px'
  }))