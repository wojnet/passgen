import React from 'react'
import './index.css'
import Header from './components/Header'
import Generator from './components/Generator'
import Password from './components/Password'
import Credits from './components/Credits'

function App() {

  const r = document.querySelector(":root")

  const characters = [
    "qwertyuiopasdfghjklzxcvbnm",
    "QWERTYUIOPASDFGHJKLZXCVBNM",
    "0123456789",
    " !\"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~"
  ]

  const [checked, setChecked] = React.useState([true, true, true, false])
  const [passLength, setPassLength] = React.useState(8)
  const [pass, setPass] = React.useState("")
  const [isDark, setIsDark] = React.useState(false)

  const generate = () => {
    if (checked.some((e) => e === true))
    {
      let charset = ""
      let tempPass = ""
      checked.forEach((element, index) => {
        if (element)
        {
          charset += characters[index]
        }
      })
      for (let i = 0; i < passLength; i++)
      {
        tempPass += charset.split("")[Math.floor(Math.random()*charset.length)]
      }
      setPass(tempPass)
    }
    else
    {
      alert("Bruh")
    }
  }

  React.useEffect(() => {
    if (isDark)
    {
      r.style.setProperty("--c1", "#000")
      r.style.setProperty("--c2", "#FFFC")
      r.style.setProperty("--c3", "linear-gradient(to right, #F0C141, #81EAB2)")
      r.style.setProperty("--invert", "invert(1)")
    }
    else
    {
      r.style.setProperty("--c1", "#FFF")
      r.style.setProperty("--c2", "#000")
      r.style.setProperty("--c3", "#39D")
      r.style.setProperty("--invert", "none")

    }
  }, [isDark])

  return (
    <div className="App">
      <Header setIsDark={setIsDark} />

      <Generator
        checked={checked}
        setChecked={setChecked}
        passLength={passLength}
        setPassLength={setPassLength}
        generate={generate}
      />

      <Password value={pass} />

      {/* DEBUG SECTION */}
      {/* <br />
      {checked.map(e => <p>{e === true ? "TRUE" : "FALSE"}</p>)}
      {passLength} */}

      <Credits />

    </div>
  );
}

export default App;
