import { createSlice } from '@reduxjs/toolkit'

interface UserInformation {
  id: number
  name: string
  nickname: string
  avatar: string
  college: string
  department: string
  class: string
  introduction: string
  phone: string
  deleted: number
  complete: number
  type: any
  studentId: string
}

const initialState: UserInformation = {
  id: -1,
  name: '',
  nickname: '游客',
  avatar: '',
  college: '',
  department: '',
  class: '',
  introduction: '',
  phone: '',
  deleted: 0,
  complete: 0,
  type: null,
  studentId: '',
}

// export const getUserInfo = createAsyncThunk('mine/fetchUserInfo', async () => {
//   const data: UserInformation = await getUserInformation()
//   return data
// })

export const mineSlice = createSlice({
  name: 'mine',
  initialState,
  reducers: {
    modifyUserInfo: (state, action) => {
      state = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
  //     state = payload
  //   })
  // },
})

export const { modifyUserInfo } = mineSlice.actions

export default mineSlice.reducer
