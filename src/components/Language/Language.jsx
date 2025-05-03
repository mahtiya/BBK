import Russian from './../../assets/icons/Flags/flags.svg';

export default function Language({ isOpen }) {
  return (
    <>
      <img src={Russian} alt="Flag" />
      <p className='language_text'>Ру</p>

      {isOpen && (
        <p>Ali</p>
      )}
    </>
  )
}
