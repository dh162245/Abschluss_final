import Footer from "./footer";
import Header from "./header";
import image9 from '../Images/image 9.jpg';
import image10 from '../Images/image 10.jpg';
import image11 from '../Images/image 11.jpg';

const AddDrink = () => {
  return (
    <>
      <Header />
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="category" placeholder="Kategorie" />
        <input type="text" name="image" placeholder="Bild URL" />
        <input type="text" name="instruction" placeholder="Anleitung" />
        <input type="text" name="ingredient1" placeholder="Zutat 1" />
        <input type="text" name="measure1" placeholder="Menge Zutat 1" />
        <input type="text" name="ingredient2" placeholder="Zutat 2" />
        <input type="text" name="measure2" placeholder="Menge Zutat 2" />
        <input type="text" name="ingredient3" placeholder="Zutat 3" />
        <input type="text" name="measure3" placeholder="Menge Zutat 3" />
        <input type="submit" name="submit" value="Submit" />
      </form>
      <figure>
        <img src={image9} alt="-" />
        <img src={image10} alt="-" />
        <img src={image11} alt="-" />
      </figure>
      <Footer />
    </>
  );
}

export default AddDrink;