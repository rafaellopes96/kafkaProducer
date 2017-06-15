case class Emails ( 
	email: String,
	tipo: String 
)

case class Telefones (
	tipo: String,
	ddd: String,
	telefone: String
)

case class Enderecos (
	tipo: String,
	logradouro: String,
	numero: String,
	complemento: String,
	bairro: String,
	municipio: String,
	estado: String,
	cep: String,
	pais: String,
	pontoReferencia: String,
)

case class Message (
	operacao: String,
	origem: String,
	cpfCnpj: String,
	usuarioGuid: String,
	identificadorFiscal: String, 
	idCliente: Long,
	atividadeFim:, String,
	nome: String,
	nomeSocial: String,
	razaoSocial: String,
	nomeFantasia: String,
	inscricaoEstadual: String,
	ufInscricaoEstadual: String,
	rg: String,
	ufrg: String,
	orgaoEmissorRg: String,
	dataEmissaoRg: Date,
	sexo: String,
	dataNascimento: Date,
	estadoCivil: String,
	profissao: String,
	cargo: String,
	escolaridade: String,
	optInSms: String,
	optInEmail: String,
	dataCadastro: Date,
	dataUltimaAtualizacao: Datetime,
	emails: Emails,
	telefones: Telefones,
	enderecos: Enderecos
)
