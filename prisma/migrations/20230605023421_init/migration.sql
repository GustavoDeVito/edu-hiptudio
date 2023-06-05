-- CreateTable
CREATE TABLE `album` (
    `ID_album` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `capa` TEXT NULL,
    `produtor` TEXT NULL,
    `fk_TipoContrato` INTEGER NULL,
    `fk_Cliente` INTEGER NULL,

    INDEX `fk_Cliente`(`fk_Cliente`),
    INDEX `fk_TipoContrato`(`fk_TipoContrato`),
    PRIMARY KEY (`ID_album`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cliente` (
    `ID_cliente` INTEGER NOT NULL AUTO_INCREMENT,
    `telefone` TEXT NULL,
    `email` TEXT NULL,
    `senha` TEXT NULL,
    `nome` TEXT NULL,
    `genero_musical` TEXT NULL,

    PRIMARY KEY (`ID_cliente`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contrato` (
    `ID_contrato` INTEGER NOT NULL AUTO_INCREMENT,
    `data_contrato` DATE NULL,
    `duracao_semestres` INTEGER NULL,
    `fk_TipoContrato` INTEGER NULL,
    `valor` INTEGER NULL,
    `fk_Cliente` INTEGER NULL,

    INDEX `fk_Cliente`(`fk_Cliente`),
    INDEX `fk_TipoContrato`(`fk_TipoContrato`),
    PRIMARY KEY (`ID_contrato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `distribuicao` (
    `ID_Distribuicao` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_distribuidora` INTEGER NULL,
    `fk_tipoContrato` INTEGER NULL,

    INDEX `fk_distribuidora`(`fk_distribuidora`),
    INDEX `fk_tipoContrato`(`fk_tipoContrato`),
    PRIMARY KEY (`ID_Distribuicao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `distribuidora` (
    `ID_distribuidora` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` TEXT NULL,
    `plataforma` VARCHAR(255) NULL,
    `fk_TipoContrato` INTEGER NULL,

    PRIMARY KEY (`ID_distribuidora`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `letra` (
    `ID_letra` INTEGER NOT NULL AUTO_INCREMENT,
    `conteudo` TEXT NULL,
    `titulo` VARCHAR(255) NULL,
    `fk_TipoContrato` INTEGER NULL,
    `fk_Cliente` INTEGER NULL,

    INDEX `fk_Cliente`(`fk_Cliente`),
    INDEX `fk_TipoContrato`(`fk_TipoContrato`),
    PRIMARY KEY (`ID_letra`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `musica` (
    `ID_musica` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `feats` TEXT NULL,
    `fk_album` INTEGER NULL,
    `letra` TEXT NULL,
    `fk_TipoContrato` INTEGER NULL,
    `fk_Cliente` INTEGER NULL,

    INDEX `fk_Cliente`(`fk_Cliente`),
    INDEX `fk_TipoContrato`(`fk_TipoContrato`),
    INDEX `fk_album`(`fk_album`),
    PRIMARY KEY (`ID_musica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shows` (
    `ID_shows` INTEGER NOT NULL AUTO_INCREMENT,
    `horario` TEXT NULL,
    `data_show` DATE NULL,
    `cidade_endereco` TEXT NULL,
    `CEP_endereco` TEXT NULL,
    `rua_endereco` TEXT NULL,
    `numero_endereco` TEXT NULL,
    `titulo` VARCHAR(255) NULL,
    `fk_TipoContrato` INTEGER NULL,
    `fk_Cliente` INTEGER NULL,

    INDEX `fk_Cliente`(`fk_Cliente`),
    INDEX `fk_TipoContrato`(`fk_TipoContrato`),
    PRIMARY KEY (`ID_shows`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipocontrato` (
    `ID_tipoContrato` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NULL,
    `can_music` BOOLEAN NULL,
    `can_shows` BOOLEAN NULL,
    `can_albun` BOOLEAN NULL,
    `can_letra` BOOLEAN NULL,

    PRIMARY KEY (`ID_tipoContrato`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
