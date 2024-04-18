import imgAbout from '../../../assets/imgAbout.svg'

const Safe = () => {
  return (
    <>
      <div>
        <p style={{paddingTop: '30px', marginBottom: '22px', color: '#00000080',fontSize: '24px',fontWeight: '500',}}>О нас</p>
        <h2 style={{color: '#000000',fontSize: '32px',fontWeight: '500',marginBottom: "24px",}}>РАЗВИВАЕМ СТОМАТОЛОГИИКОМФОРТНЫМИ <br /> И БЕЗОПАСНЫМИ</h2>
        <p style={{color: '#000000',fontSize: '20px',fontWeight: '400', marginBottom: '35px', lineHeight: '24.38px'}}>Современные стоматологические услуги вам с удовольствием окажут в наших клиниках «Safe.Clinic». <br /> Здесь работают люди всем сердцем преданные своему делу и Вы можете доверить свою улыбку <br /> настоящим профессионалам.</p>
        <img style={{paddingLeft: '20px', marginBottom: '35px'}} src={imgAbout}/>
        <p style={{color: '#000000',fontSize: '20px',fontWeight: '400',lineHeight: '24.38px'}}>Наша первая клиника «safe.Clinic»  недавно начала свою работу в 2022 году. С тех пор она успешно <br /> зарекомендовала себя на рынке стоматологических услуг. А в 2022 году мы открыли новую клинику <br /> «Safe.Clinic», в связи с расширением клиентской базы.</p>
      </div>
    </>
  )
}

export default Safe
