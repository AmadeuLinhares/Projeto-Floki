import React, { useState, useEffect } from 'react';
import {
  GiSlicedBread,
  GiFruitTree,
  GiKiwiFruit,
  GiFruiting,
  GiFruitBowl,
  GiSodaCan,
} from 'react-icons/gi';
import { GrCart } from 'react-icons/gr';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { RiFileList3Line } from 'react-icons/ri';
import { FaFilter, FaSearchPlus } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import ItemProduto from '../../components/ItensCarrinho';
import ItensAdicionais from '../../components/Produtos';
import {
  Subcontainer,
  CarrinhoAtual,
  AdicionarItens,
  Carrinho,
  HeaderCarrinho,
  IconHeaderCar,
  TituloHeaderCar,
  ExpandeCar,
  Titulo,
  Entrega,
  BodyCarrinhoAtual,
  HeaderAddItens,
  BodyAddItens,
  TitleAddItens,
  SearchAddItens,
  IconsSearch,
  SubontainerAddItens,
  HeaderBodyItens,
  ItensAdd,
  Duvida,
  TextoDuvida,
  ContainerButton,
} from './styles';

import Button from '../../components/Button';

import * as Dados from '../../util/objetoParametro';
import api from '../../services/api';

const Home: React.FC = () => {
  const [carrinhoAtual, setCarrinhoAtual] = useState(
    [] as Dados.ProdutosSelecionados[],
  );
  const [novosProdutos, setNovosProdutos] = useState(
    [] as Dados.ProdutosDisponiveis[],
  );

  const [entregaApi, setEntregaApi] = useState('');
  const [mostrarCarrinho, setMostrarCarrinho] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function ListarProdutosCarrinho() {
      const { data } = await api.get('carrinhoAtual');
      setCarrinhoAtual(data);
      console.tron.log('carrinho', data);
    }
    async function ListarProdutosDisponiveis() {
      const { data } = await api.get('produtosDiponiveis');
      setNovosProdutos(data);
      console.log('disponiveis', data);
    }
    async function ListarDataEntrega() {
      const { data } = await api.get('entrega');
      console.log('entrega', data);
      setEntregaApi(data.data);
    }

    ListarProdutosCarrinho();
    ListarProdutosDisponiveis();
    ListarDataEntrega();
  }, []);

  return (
    <Container>
      <Subcontainer>
        <CarrinhoAtual>
          <Carrinho>
            <HeaderCarrinho>
              <IconHeaderCar>
                <GrCart size={40} />
              </IconHeaderCar>
              <TituloHeaderCar>
                <Titulo>
                  <h1>Carrinho Atual</h1>
                </Titulo>
                <Entrega>
                  <p>Entrega</p>
                  <span>{entregaApi}</span>
                </Entrega>
              </TituloHeaderCar>

              <ExpandeCar
                type="button"
                onClick={() => setMostrarCarrinho(!mostrarCarrinho)}
              >
                <BsArrowsAngleExpand size={30} />
              </ExpandeCar>
            </HeaderCarrinho>

            <BodyCarrinhoAtual>
              {mostrarCarrinho ? (
                carrinhoAtual.map(data => (
                  <ItemProduto
                    key={data.id}
                    qtdItens={2}
                    Icon={GiSlicedBread}
                    sizeIcon={20}
                    colorIcon="grey"
                  />
                ))
              ) : (
                <BodyAddItens>
                  <HeaderBodyItens>
                    <p>Itens</p>
                    <p>Quantidade</p>
                  </HeaderBodyItens>
                  <ItensAdd>
                    {carrinhoAtual.map(data => (
                      <ItensAdicionais
                        key={data.id}
                        Icon={GiSodaCan}
                        sizeIcon={20}
                        colorIcon="grey"
                        quantidade={data.quantidade}
                        medida={data.medida}
                      >
                        {data.nome}
                      </ItensAdicionais>
                    ))}
                  </ItensAdd>
                </BodyAddItens>
              )}

              {/* {carrinhoAtual.map(data => (
                <ItemProduto
                  key={data.id}
                  qtdItens={2}
                  Icon={GiSlicedBread}
                  sizeIcon={20}
                  colorIcon="grey"
                />
              ))} */}
            </BodyCarrinhoAtual>
          </Carrinho>
        </CarrinhoAtual>

        <AdicionarItens>
          <SubontainerAddItens>
            <HeaderAddItens>
              <TitleAddItens>
                <RiFileList3Line size={30} />
                <h1>Adicionar Itens</h1>
              </TitleAddItens>
              <SearchAddItens>
                <input type="text" />
                <FaSearchPlus color="grey" size={20} />
              </SearchAddItens>
              <IconsSearch>
                <GiFruitTree size={30} color="grey" />
                <GiKiwiFruit size={30} color="grey" />
                <GiFruiting size={30} color="grey" />
                <GiFruitBowl size={30} color="grey" />
                <FaFilter size={30} color="grey" />
              </IconsSearch>
            </HeaderAddItens>

            <BodyAddItens>
              <HeaderBodyItens>
                <p>Itens</p>
                <p>Quantidade</p>
              </HeaderBodyItens>
              <ItensAdd>
                {novosProdutos.map(data => (
                  <ItensAdicionais
                    key={data.id}
                    Icon={GiSodaCan}
                    sizeIcon={20}
                    colorIcon="grey"
                    quantidade={data.quantidade}
                    medida={data.medida}
                  >
                    {data.nome}
                  </ItensAdicionais>
                ))}
              </ItensAdd>
            </BodyAddItens>
          </SubontainerAddItens>
        </AdicionarItens>

        <Duvida>
          <TextoDuvida>
            <p>Dúvida?</p>
            <p>Entre em contato pelo WhatsApp</p>
          </TextoDuvida>

          <ImWhatsapp size={40} />
        </Duvida>

        <ContainerButton>
          <Button funcao={() => history.push('List')}>Check List</Button>
        </ContainerButton>
      </Subcontainer>
    </Container>
  );
};

export default Home;
