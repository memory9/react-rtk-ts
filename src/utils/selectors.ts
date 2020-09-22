// 常用的 selectors
import { RootState } from '../store'

// 用户个人信息选择器
export const myInformationSelector = (state: RootState) => state.mine
