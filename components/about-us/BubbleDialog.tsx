import { colors } from '../../styles/theme';

interface IDialogs {
  children: string
  color?: 'primary' | 'tertiary'
  margin: 'left' | 'right'
}

export const Dialogs = ({color = 'primary' , children, margin}: IDialogs) => {
  return (
    <>
      <div className="dialog-container">
        <div className="dialog">
          { children }
        </div>
      </div>
      <style jsx>{`
          .dialog-container {
            display: flex;
            margin: 10px;
            margin-${margin}: auto;
          }
        
          .dialog {
            display: flex;
            padding: 20px;
            height: fit-content;
            justify-content: center;
            align-items: center;
            background-color: ${colors[color]};
            border-radius: 10px;
          }
      `}</style>
    </>
  );
};
