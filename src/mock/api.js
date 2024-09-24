/*
 * @Author: xushilong
 * @Date: 2024-09-23 21:02:53
 * @Address: 无
 * @Description: mock模拟数据
 */

export default [
  {
    url: '/api/demo',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: 'jack',
          age: 18
        }
      }
    }
  }
]
