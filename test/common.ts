// We will write common test method inside this file

process.env.NODE_ENV = "test";

import "mocha";
import * as SampleModel from "../models/samplemodel";

const express = require("../config/express")();

export const request = require("supertest")(express);

export const chai = require("chai");
export const should = chai.should();

export const cleanCollections = (): Promise<any> => {
    const cleanUp = [
        SampleModel.cleanCollection()
        // Add more
    ];
    return Promise.all(cleanUp);
};