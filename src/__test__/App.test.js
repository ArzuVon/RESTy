import React, { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';
import Results from '../components/Results/index.js';
import Form from '../components/Form/index.js';

describe('Main App tests', () => {
  it('renders a header element', () => {
    let header = createElement(Header);
    render(header);
    expect(header).toBeTruthy();
    expect(screen.getByText('RESTy')).toBeTruthy();
  });

  it('renders a footer element', () => {
    let footer = createElement(Footer);
    render(footer);
    expect(footer).toBeTruthy();
  })

  it('renders a results component', () => {
    let results = createElement(Results);
    render(results);
    expect(results).toBeTruthy();
  })

  it('renders a form component', () => {
    let form = createElement(Form);
    render(form);
    expect(form).toBeTruthy();
  })
});

