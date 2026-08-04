import React from 'react'

function Login() {
  return (
    <div>
        <h2>به اپ یادداشت ملینا خوش آمدید</h2>
        <p>لطفا وارد شوید</p>
        <form>
            <input type="text" placeholder='نام کاربری خود را وارد کنید' />
              <input type="password" placeholder='نام کاربری خود را وارد کنید' />
              <button>مرا به خاطر بیپار</button>
              <button>فراموشی رمز عبور</button>
              <button>ورود</button>
              <button>ثبت نام</button>
        </form>
    </div>
  )
}

export default Login