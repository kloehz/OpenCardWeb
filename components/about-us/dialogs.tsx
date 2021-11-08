import { colors } from '../../styles/theme';

interface IDialogs {
  side: string
}

export const Dialogs = ({side}: IDialogs) => {
  return (
    <>
      <section className="dialogs-container">
        <div className="dialog">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, nostrum ducimus perspiciatis dicta, magnam non vero, minima consectetur suscipit quisquam quod eaque iure quibusdam ea veritatis numquam laboriosam cumque assumenda.
        </div>
      </section>
      <style jsx>{`
          .dialogs-container {
            display: flex;
            width: 100vw;
          }
        
          .dialog {
            display: flex;
            padding: 20px;
            width: 70vw;
            height: fit-content;
            min-height: 20vh;
            justify-content: center;
            align-items: center;
            background-color: ${colors.secondary};
            margin: ${ side === 'right' ? '10px 20px 10px auto' : '10px auto 10px 20px'};
            border-radius: ${ side === 'right' ? '10px 60px' : '60px 10px' };
          }
      `}</style>
    </>
  );
};
