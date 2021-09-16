import React from 'react';

export class Slideshow extends React.Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    delayMs: 7000,
  };

  private timerId: number | null;

  constructor(props: Props) {
    super(props);
    this.timerId = null;

    this.state = {
      selectedIndex: 0,
    };
  }

  public componentDidMount() {
    this.timerId = window.setInterval(() => {
      let index = this.state.selectedIndex;

      if (index >= this.props.children.length - 1) {
        index = 0;
      } else {
        index++;
      }

      this.setState({ selectedIndex: index });
      this.props.onChange(index);
    }, this.props.delayMs);
  }

  public componentWillUnmount() {
    this.timerId && clearInterval(this.timerId);
  }

  public render() {
    const { children } = this.props;

    return (
      <>
        <div className="overflow-hidden flex">
          {children.map((item, index) => {
            let display = 'opacity-0';

            if (this.state.selectedIndex === index) {
              display = 'opacity-1';
            }

            const style = `flex justify-center items-center absolute min-h-full left-0 top-0 ease-in-out duration-500 ${display}`;

            return (
              <div className={style} key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

type Props = StateProps & DispatchProps;

interface StateProps {
  children: React.ReactNode[];
  delayMs?: number;
}

interface DispatchProps {
  onChange: (index: number) => void;
}

interface State {
  selectedIndex: number;
}
