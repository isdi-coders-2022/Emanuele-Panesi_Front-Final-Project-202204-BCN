import styled from "styled-components";

const StyledPizzeria = styled.li`
  display: flex;
  align-items: center;
  width: 97%;
  height: 300px;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  background-color: #fafafa;
  border-radius: 4rem;
  margin-top: 30px;
  margin-left: 10px;

  @media (max-width: 316px) {
    flex-direction: column;
  }

  .image-container {
    display: flex;
    height: 100%;
    width: 50%;
  }

  img {
    position: relative;
    bottom: 10px;
    width: 300px;
    height: 300px;
    border-radius: 50%;

    @media (min-width: 1280px) {
      width: 300px;
      height: 300px;
    }

    @media (min-width: 495px) and (max-width: 600px) {
      width: 230px;
      height: 230px;
    }

    @media (min-width: 228px) and (max-width: 494px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 227px) {
      width: 120px;
      height: 120px;
    }
  }

  .info-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pizzeria-name {
    font-family: "Abadi MT Condensed Light";
    font-size: 28px;
    text-align: center;
    position: relative;
    bottom: 40px;

    @media (min-width: 1280px) {
      font-size: 20px;
    }

    @media (min-width: 461px) and (max-width: 600px) {
      font-size: 15px;
    }

    @media (max-width: 460px) {
      font-size: 10px;
    }
  }

  .pizzeria-info {
    font-family: "Abadi MT Condensed Light";
    display: flex;
    font-size: 25px;
    flex-direction: column;
    font-weight: 30px;
    text-align: center;
    position: relative;
    bottom: 30px;
    gap: 2rem;

    @media (min-width: 1280px) {
      font-size: 12px;
    }

    @media (min-width: 461px) and (max-width: 600px) {
      font-size: 10px;
    }

    @media (max-width: 460px) {
      font-size: 8px;
    }
  }
`;

const Pizzeria = (): JSX.Element => {
  return (
    <>
      <StyledPizzeria>
        <div className="image-container">
          <img src="/images/pizza.jpg" alt="neapolitan pizza" />
        </div>
        <div className="info-container">
          <div className="pizzeria-name">
            <h2>Focacceria Toscana</h2>
          </div>
          <div className="pizzeria-info">
            <span>Carrer Ferran 41</span>
            <span>Opening Hours: 15:00 - 23:00</span>
          </div>
        </div>
      </StyledPizzeria>
    </>
  );
};

export default Pizzeria;
