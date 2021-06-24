import React, { Component } from 'react';

import Image from "./Image";
import Video from "./Video";

class Info extends Component {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
    }

    load = (backgroundColor, textColor) => {
        this.props.appChangeColor(backgroundColor, textColor);
    }

    handleLoad() {
        // set the default colouring on load
        this.load("red", "white")
    }

    render() {
        return (
            <div className="centered-column side-margins"  >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue nisl, laoreet ac risus eget, laoreet ullamcorper lorem. Sed eget ipsum ut lectus ullamcorper pulvinar. Donec vel nisl enim. Etiam tristique tempus posuere. Ut in ornare felis, eget finibus augue. Nunc lacinia, elit vel luctus ultrices, mi dui iaculis tortor, sit amet aliquam felis metus sit amet arcu. Donec orci lacus, posuere a odio aliquet, malesuada semper velit. Pellentesque hendrerit tellus finibus tincidunt molestie.</p>
                <p>Suspendisse potenti. Ut a sodales justo. In ac massa sit amet dolor vulputate ullamcorper. Proin eget fringilla elit. Proin leo enim, vestibulum eget convallis vitae, iaculis quis nulla. Nunc dignissim vel magna at commodo. Fusce eu metus vel enim maximus iaculis. Morbi laoreet magna ante, ut pharetra quam molestie non. Donec aliquet in mi nec aliquam. Etiam posuere rhoncus lacus, vel facilisis justo viverra sed. Etiam mollis enim a luctus pellentesque. Ut ut lacus in neque tempus pulvinar id sed arcu. Ut ante dui, vehicula ac magna nec, varius varius justo.</p>
                <p>Sed id enim erat. Maecenas laoreet ullamcorper lobortis. Vestibulum pharetra metus in imperdiet commodo. Ut ac lacinia neque. Nulla euismod velit eget efficitur fermentum. Cras tincidunt iaculis molestie. Nulla vehicula ut nibh nec placerat. Morbi iaculis erat arcu. Cras eget purus interdum, vestibulum eros vitae, euismod sem. Morbi tincidunt sem ullamcorper ipsum venenatis, eget accumsan enim placerat. Nulla eleifend viverra vestibulum. Mauris id facilisis ante.</p>
                <p>Vivamus euismod est et aliquam pharetra. Cras non enim pharetra risus tempor pretium id sit amet metus. Aliquam condimentum metus eleifend lorem aliquet, non aliquet lacus iaculis. Duis eu risus fermentum magna sagittis fringilla vitae sed ex. Pellentesque commodo viverra libero, vel fermentum mauris interdum at. In id purus dolor. Fusce condimentum sodales ipsum ac hendrerit. Duis congue scelerisque convallis. Sed tempor, magna vitae hendrerit eleifend, ligula ligula egestas velit, sed facilisis elit quam non risus. Cras vel mollis ipsum, luctus dictum urna.</p>
                <p>Curabitur nisl sem, viverra sit amet metus ac, mollis venenatis lacus. Cras porttitor ipsum nec eros posuere ullamcorper. Vestibulum eu nisi sit amet erat aliquam tristique. Vestibulum nec elit pellentesque, facilisis velit molestie, ultricies lacus. Vestibulum sollicitudin, quam sit amet accumsan bibendum, nunc massa pharetra nulla, ut porta nulla lorem vel tortor. Nam efficitur, odio et eleifend ullamcorper, erat nisi congue lacus, nec ultricies mi arcu ac nisl. Integer ligula velit, posuere fringilla elit nec, faucibus congue mauris. Maecenas est dui, rutrum ac fermentum feugiat, tincidunt ac turpis. Morbi id consequat sapien. Donec ut neque purus. Sed nisi risus, aliquet at aliquet eu, egestas in turpis. Vivamus semper laoreet odio id euismod. Phasellus quis ultrices eros, at accumsan lacus. Nunc suscipit nisl nec eros convallis, quis pharetra ante varius. Maecenas ornare fermentum tortor, eget venenatis ex maximus ac.</p>
                <Image />
                <Video path='./videos/ripple-random2.mp4' title='TEST' />
            </div>
        );
    }
}

export default Info;